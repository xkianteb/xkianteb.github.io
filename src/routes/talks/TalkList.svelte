<script>
  export let data;

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

  let currentYear = '';
  function isCurrentYear(year) {
    let result = currentYear === year;
    currentYear = year;
    return result;
  }
</script>

<div class="grid gap-y-1">
  {#each data as item}
     {#if !isCurrentYear(item.YEAR)}
         <h2 class="heading2centered ma-2 mb-2">{item.YEAR}</h2>
     {/if}

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
        <!--
        <div class="sm:ml-auto mb-0 order-last text-neutral-500">
          {item.YEAR}
        </div>
        -->
      </div>
      <div class="leading-snug font-sans text-sm">
        {item.AUTHOR}
      </div>
      <div class="leading-snug font-sans text-sm">
        {item.NOTE}, {item.YEAR}
      </div>

      <div class="mb-4">
        <a href={item.URL} class="font-sans text-xs hover:cursor-pointer hover:bg-neutral-300 transition-colors" id="dropdown">[Slides]</a>
      </div> 
  {/each}
</div>
