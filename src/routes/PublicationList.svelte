<script>
  export let data;
  export let dataFilter;
  export let dataOrder;

  // Sort the data based on date
  data.sort((a, b) => {
      if (a.YEAR < b.YEAR) {
          return 1;
      }
      if (a.YEAR > b.YEAR) {
          return -1;
      }
      return 0;
  });

  function doesIncludes(keywords) {
    //keywords not empty but dataFilter is empty
    if (keywords && !dataFilter) {
      return true 
    //keywords empty but dataFilter is not
    } else if (!keywords && dataFilter){
      return false 
    // Both keywords and dataFilter is empty
    } else if (!keywords && !dataFilter){
      return true
    } else {   
      let result = keywords.match(dataFilter);
      return result
    }
  }

  function doOrder() {
    let result = dataOrder == 'year';
    return result
  }

  let currentYear = '';
  function isCurrentYear(year) {
    let result = currentYear === year;
    currentYear = year;
    return result;
  }

  const is_visible = {};
  const toggle = (i) => is_visible[i] = !is_visible[i];
</script>

<div class="grid gap-y-1">
  <!-- If statement to decide on to add year seperators -->
  {#each data as item, i}
    {#if doOrder()}
      {#if !isCurrentYear(item.YEAR)}
          <h2 class="heading2centered ma-2 mb-2">{item.YEAR}</h2>
      {/if}
    {/if}

    <!-- If statement to filter publicatios based on keywords in bibtex -->
    {#if doesIncludes(item.KEYWORDS)}
      <div class="flex flex-col sm:flex-row sm:items-end">
        <div class="font-sans text-sm font-semibold text-black">
          <a
            href={item.URL}
            class="inline-block -mx-3 px-3 py-0 hover:bg-neutral-300 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            {item.TITLE}
          </a>
        </div>
      </div>
      <div class="leading-snug font-sans text-sm" content="text/html; charset=utf-8">
        {item.AUTHOR}
      </div>
      <div class="leading-snug font-sans text-sm">
        {item.BOOKTITLE}, {item.YEAR}
      </div>

      {#if item.NOTE}
        <div class="leading-snug font-sans text-sm">
          {item.NOTE}
        </div>
      {/if}

      <div>
       <a href={item.URL} class="group-disabled group-hover:disabled disabled">[Arxiv]</a>

       <!-- Used to show the abstract and bibtex of a paper -->
       <span class="font-sans text-xs hover:cursor-pointer hover:bg-neutral-300 transition-colors" id="dropdown" on:click={() => toggle(i)}>[Abstract / Bibtex]</span>
       {#if is_visible[i]}
         <div class="bg-white  w-auto">
           <div class="p-3 text-sm">
             {item.ABSTRACT}
           </div>
           <div class="p-3 text-sm">
             <div>@{item.type} &lcub;{item.key}&rcub;,</div>
             <div class='ml-4 text-sm'>title=&lcub;{item.TITLE}&rcub;,</div>
             <div class='ml-4 text-sm'>author=&lcub;{item.AUTHOR}&rcub;,</div>
             <div class='ml-4 text-sm'>booktitle=&lcub;{item.BOOKTITLE}&rcub;,</div>
             <div class='ml-4 text-sm'>year=&lcub;{item.YEAR}}&rcub;,</div>
             <div>&rcub;</div>
           </div>
         </div>
       {/if}

      </div>
    {/if}
  {/each}
</div>


