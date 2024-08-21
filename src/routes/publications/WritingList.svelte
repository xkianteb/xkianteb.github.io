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

  //variable Init
  let count = 0;
  //function to be called on click
  function incrementCount() {
  	//incremtent
  	count++
  }

</script>

<div class="grid gap-y-1">
  {#each data as item}
      <div class="flex flex-col sm:flex-row sm:items-end">
        <div class="text-lg text-black">
          <a
            href="https://xkianteb.github.io"
            class="inline-block -mx-3 px-3 py-0 hover:bg-neutral-100 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            {item.TITLE}
          </a>
        </div>
        <div class="sm:ml-auto mb-0 order-last text-neutral-500">
          {item.YEAR}
        </div>
      </div>
      <div class="leading-snug font-serif">
        {item.AUTHOR}
      </div>
      <div class="leading-snug font-serif">
        {item.SHORTTITLE}
      </div>

  {/each}
</div>

<button on:click={incrementCount}>
	Clicked  {count} {count === 1 ? 'time': 'times'}
</button>

