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

<section class="layout-md">
  <PublicationList data={bibArr} dataOrder={dataOrder}/>
</section>

