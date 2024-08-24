<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import bibtexParse from 'bibtex-parse'

  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data);
  const {bibtex}  = data;
  const bibArr = bibtexParse.entries(bibtex)

 /**
	async function add() {
      // Let's say your json is in /public/assets/my-json.json
      const filePath = path.resolve('static', 'assets/tex', 'bibfile.bib');
      const bibtex = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
      const bibArr = bibtexParse.entries(bibtex)

      console.log(total)

      total = await bibArr;
	}
 */

  //variable Init
  let count = 0;
  //function to be called on click
  function incrementCount() {
  	//incremtent
  	count++
  }
</script>

<Seo
  title="Kiant&eacute; Brantley – Publications"
  description="Academic Publications"
/>

<section class="layout-md">
  <WritingList data={bibArr}/>
</section>


<button on:click={incrementCount}>
	Clicked  {count} {count === 1 ? 'time': 'times'}
</button>

