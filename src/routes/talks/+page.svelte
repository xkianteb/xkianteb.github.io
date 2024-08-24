<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import TalkList from "./../TalkList.svelte";
  import bibtexParse from 'bibtex-parse'
  import type { PageData } from './../$types'

  export let data: PageData
  
  const bibTalkArr = bibtexParse.entries(data.talks)
  export const dataOrder = 'year'
</script>

<Seo
  title="Kiant&eacute; Brantley – Publications"
  description="Academic Publications"
/>

<section class="layout-md">
  <TalkList data={bibTalkArr} dataOrder={dataOrder}/>
</section>

