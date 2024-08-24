<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PublicationList from "./../PublicationList.svelte";
  import bibtexParse from 'bibtex-parse'
  import type { PageData } from './$types'

  export let data: PageData

  const bibArr= bibtexParse.entries(data.bibtex)
  export const dataOrder = 'year'
</script>

<Seo
  title="Kiant&eacute; Brantley – Publications"
  description="Academic Publications"
/>

<section class="layout-md mb-4">
  <div class="anormal-font-bold mb-8">
      You can view my full list of publications at [<a class="anormal-font link" href="https://scholar.google.com/citations?user=8S5AOggAAAAJ&hl=en">Google Scholar</a> or <a class="anormal-font link" href="https://www.semanticscholar.org/author/Kianté-Brantley/11963742">Semantic Scholar</a>].
  </div>
 </section>

<section class="layout-md">
  <h2 class="heading2">Publications:</h2>
  <PublicationList data={bibArr} dataOrder={dataOrder}/>
</section>

