<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import type { PageData } from './$types'
 
  import PublicationList from "./PublicationList.svelte";
  import TalkList from "./TalkList.svelte";
  import Contact from "./Contact.svelte";
  import Research from "./Research.svelte";
  import ProspectiveStudents from "./ProspectiveStudents.svelte";

  import bibtexParse from 'bibtex-parse'

  export let data: PageData

  const bibPubArr = bibtexParse.entries(data.bibtex)
  const bibTalkArr = bibtexParse.entries(data.talks)

  export const dataFilter = 'recent';
</script>

<Seo
  title="Kiant&eacute; Brantley"
  description=""
/>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<section class="layout-md mb-5">
  <h2 class="heading2">Research:</h2>
  <Research />
</section>

<section class="layout-md mb-5">
  <h2 class="heading2">Prospective Students:</h2>
  <ProspectiveStudents />
</section>


<section class="layout-md mb-5">
  <h2 class="heading2">Recent Publications:</h2>
   <PublicationList data={bibPubArr} dataFilter={dataFilter}/>
</section>

<section class="layout-md">
  <h2 class="heading2">Recent Talks:</h2>
   <TalkList data={bibTalkArr} dataFilter={dataFilter}/>
</section>
