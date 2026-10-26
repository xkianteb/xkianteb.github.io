<script>
  import { matchesKeywordFilter, sortByYear } from "$lib/bibtex-list";

  export let data;
  export let dataFilter;
  export let dataOrder;
  export let showYear = true;
  export let groupYears = true;

  $: sortedData = sortByYear(data);

  const is_visible = {};
  const toggle = (i) => is_visible[i] = !is_visible[i];
</script>

<div class="grid gap-y-0 ml-4">
  {#each sortedData as item, i}
    {#if showYear && groupYears && dataOrder === "year" && (i === 0 || item.YEAR !== sortedData[i - 1].YEAR)}
      <h2 class="heading2centered ma-2 mb-2">{item.YEAR}</h2>
    {/if}

    {#if matchesKeywordFilter(item.KEYWORDS, dataFilter)}
      <div class="flex flex-col sm:flex-row sm:items-end">
        <div class="anormal-font-semibold text-black">
          <a
            href={item.URL}
            class="inline-block -mx-3 px-3 py-0 hover:bg-neutral-300 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            {item.type === "phdthesis" ? "[PhD] " : item.type === "mastersthesis" ? "[Master] " : ""}{item.TITLE}
          </a>
        </div>
      </div>
      <div class="leading-snug anormal-font" content="text/html; charset=utf-8">
        {item.AUTHOR}
      </div>
      {#if item.BOOKTITLE || item.JOURNAL || item.ORGANIZATION || item.SCHOOL}
        <div class="leading-snug anormal-font">
          {item.BOOKTITLE || item.JOURNAL || item.ORGANIZATION || item.SCHOOL}{#if showYear}, {item.YEAR}{/if}
        </div>
      {:else if showYear && item.YEAR}
        <div class="leading-snug anormal-font">{item.YEAR}</div>
      {/if}

      {#if item.NOTE}
        <div class="leading-snug anormal-font">
          -- {item.NOTE} --
        </div>
      {/if}

      <div>
       <a href={item.URL} class="asmall-font alink">{item.KEYWORDS?.includes("book") ? "[Book]" : item.KEYWORDS?.includes("thesis") ? "[Thesis]" : "[Paper]"}</a>

       <!-- Used to show the abstract and bibtex of a paper -->
       <button class="asmall-font alink mb-4" on:click={() => toggle(i)}>{item.ABSTRACT ? "[Abstract / Bibtex]" : "[Bibtex]"}</button>
       {#if is_visible[i]}
         <div class="bg-white  w-auto">
           {#if item.ABSTRACT}
             <div class="p-3 anormal-font">
               {item.ABSTRACT}
             </div>
           {/if}
           <div class="p-3 anormal-font">
             <div>@{item.type} &lcub;{item.key}&rcub;,</div>
             <div class='ml-4 anormal-font'>title=&lcub;{item.TITLE}&rcub;,</div>
             <div class='ml-4 anormal-font'>author=&lcub;{item.AUTHOR}&rcub;,</div>
             {#if item.BOOKTITLE}
               <div class='ml-4 anormal-font'>booktitle=&lcub;{item.BOOKTITLE}&rcub;,</div>
             {:else if item.JOURNAL}
               <div class='ml-4 anormal-font'>journal=&lcub;{item.JOURNAL}&rcub;,</div>
             {:else if item.SCHOOL}
               <div class='ml-4 anormal-font'>school=&lcub;{item.SCHOOL}&rcub;,</div>
             {/if}
             <div class='ml-4 anormal-font'>year=&lcub;{item.YEAR}}&rcub;,</div>
             {#if item.URL}
               <div class='ml-4 anormal-font'>url=&lcub;{item.URL}&rcub;,</div>
             {/if}
             <div>&rcub;</div>
           </div>
         </div>
       {/if}

      </div>
    {/if}
  {/each}
</div>
