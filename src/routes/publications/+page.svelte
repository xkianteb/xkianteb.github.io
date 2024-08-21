<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import bibtexParse from 'bibtex-parse'

  //import bibfile from '/src/bibfile.bib';


  import fs from 'fs'
  import path from 'path'
  
  // Let's say your json is in /public/assets/my-json.json
  const bibtex = fs.readFileSync('bibfile.bib', { encoding: 'utf8', flag: 'r' });
  //const json = fs.readFileSync(bibtex);

  const bibArr = bibtexParse.entries(bibtex)
</script>

<Seo
  title="Kiant&eacute; Brantley – Publications"
  description="Academic Publications"
/>

<section class="layout-md">
  <h2 class="heading2">Publications</h2>
  <WritingList data={bibArr} />
</section>
