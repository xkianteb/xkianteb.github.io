<script>
  import { matchesKeywordFilter, sortByYear } from "$lib/bibtex-list";

  export let data;
  export let dataFilter;
  export let dataOrder;

  function displayVenue(venue) {
    return venue.replace(/\\&/g, "&");
  }

  function groupTalks(items) {
    const groups = new Map();

    for (const item of items) {
      const key = [item.TITLE, item.AUTHOR, item.YEAR, item.URL].join("|");
      const existing = groups.get(key);

      if (existing) {
        if (item.NOTE && !existing.VENUES.includes(item.NOTE)) {
          existing.VENUES.push(item.NOTE);
        }
      } else {
        groups.set(key, { ...item, VENUES: item.NOTE ? [item.NOTE] : [] });
      }
    }

    return [...groups.values()];
  }

  $: visibleTalks = data.filter((item) => matchesKeywordFilter(item.KEYWORDS, dataFilter));
  $: sortedData = sortByYear(groupTalks(visibleTalks));
</script>

<div class="grid gap-y-0 ml-4">
  {#each sortedData as item, i}
    {#if dataOrder === "year" && (i === 0 || item.YEAR !== sortedData[i - 1].YEAR)}
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
            {item.TITLE}
          </a>
        </div>
      </div>
      {#if item.VENUES.length > 1}
        {#each item.VENUES as venue}
          <div class="leading-snug anormal-font">{displayVenue(venue)}, {item.YEAR}</div>
        {/each}
      {:else}
        <div class="leading-snug anormal-font">{displayVenue(item.VENUES[0])}, {item.YEAR}</div>
      {/if}

      <div class="mb-4">
        <a href={item.URL} class="asmall-font alink">[Slides]</a>
      </div> 
    {/if}
  {/each}
</div>
