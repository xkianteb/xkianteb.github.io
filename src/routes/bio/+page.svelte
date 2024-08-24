<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PublicationList from "./../PublicationList.svelte";
  import Contact from "./../Contact.svelte";
  import Bio from "./Bio.svelte";
  import bibtexParse from 'bibtex-parse'

  export let data: PageData
 
  const bibArr = bibtexParse.entries(data.bibtex)
  export const dataFilter = 'representative';
  //export const dataOrder = ''
</script>

<Seo
  title="Kiant&eacute; Brantley – Publications"
  description="Academic Publications"
/>

<section class="layout-md mb-4">
  <div class="anormal-font-bold">
      You can download a PDF of my CV <a class="alink" href="/assets/pdf/kiante_brantley.pdf">here</a>.
  </div>
 </section>

<section class="layout-md mb-4">
  <h2 class="heading2">Bio:</h2>
  <Bio/>
</section>

<section class="layout-md">
  <h2 class="heading2">Representative Publications:</h2>
  <PublicationList data={bibArr} dataFilter={dataFilter}/>
</section>

