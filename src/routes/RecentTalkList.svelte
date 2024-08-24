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
</script>

<div class="grid gap-y-1">
  {#each {length: 4} as _, i}
      <div class="flex flex-col sm:flex-row sm:items-end">
        <div class="font-sans text-sm font-semibold text-black">
          <a
            href={data[i].URL}
            class="inline-block -mx-3 px-3 py-0 hover:bg-neutral-300 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            {data[i].TITLE}
          </a>
        </div>
        <!--
        <div class="sm:ml-auto mb-0 order-last text-neutral-500">
          {data[i].YEAR}
        </div>
        -->
      </div>
      <div class="leading-snug font-sans text-sm">
        {data[i].AUTHOR}
      </div>
      <div class="leading-snug font-sans text-sm">
        {data[i].NOTE}, {data[i].YEAR}
      </div>

      <div class="mb-4">
        <a href={data[i].URL} class="font-sans text-xs hover:cursor-pointer hover:bg-neutral-300 transition-colors" id="dropdown">[Slides]</a>
      </div> 
  {/each}
</div>
