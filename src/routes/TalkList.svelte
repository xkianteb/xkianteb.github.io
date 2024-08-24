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
</script>

<div class="grid gap-y-0">
  {#each data as item}
    {#if doOrder()}
       {#if !isCurrentYear(item.YEAR)}
         <h2 class="heading2centered ma-2 mb-2">{item.YEAR}</h2>
       {/if}
    {/if}

    <!-- If statement to filter publicatios based on keywords in bibtex -->
    {#if doesIncludes(item.KEYWORDS)}
      <div class="flex flex-col sm:flex-row sm:items-end">
        <div class="anormal-font-semibold text-black">
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
      <div class="leading-snug anormal-font">
        {item.AUTHOR}
      </div>
      <div class="leading-snug anormal-font">
        {item.NOTE}, {item.YEAR}
      </div>

      <div class="mb-4">
        <a href={item.URL} class="asmall-font alink">[Slides]</a>
      </div> 
    {/if}
  {/each}
</div>
