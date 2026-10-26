<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PublicationList from "./../PublicationList.svelte";
  import bibtexParse from 'bibtex-parse'
  import type { PageData } from './$types'

  export let data: PageData

  let bibArr: any[] = []
  let books: any[] = []
  let theses: any[] = []
  let publications: any[] = []
  const hasKeyword = (item: any, keyword: string) =>
    String(item.KEYWORDS ?? "").split(/[\s,]+/).includes(keyword)

  $: bibArr = bibtexParse.entries(data?.bibtex ?? "")
  $: books = bibArr.filter((item: any) => hasKeyword(item, "book"))
  $: theses = bibArr.filter((item: any) => hasKeyword(item, "thesis"))
  $: publications = bibArr.filter((item: any) =>
    !hasKeyword(item, "book") && !hasKeyword(item, "thesis"))
  export const dataOrder = 'year'
</script>

<Seo
  title="Kiant&eacute; Brantley – Publications"
  description="Academic Publications"
/>

<section class="layout-md mb-4">
  <div class="anormal-font-bold mb-8">
      You can view my full list of publications at [<a class="anormal-font alink" href="https://scholar.google.com/citations?user=8S5AOggAAAAJ&hl=en">Google Scholar</a> or <a class="anormal-font alink" href="https://www.semanticscholar.org/author/Kianté-Brantley/11963742">Semantic Scholar</a>].
  </div>
 </section>

<section class="layout-md">
  <h2 class="heading2">Books and Monographs:</h2>
  <PublicationList data={books} dataOrder={dataOrder} showYear={false}/>
</section>

<section class="layout-md">
  <h2 class="heading2">Theses:</h2>
  <PublicationList data={theses} dataOrder={dataOrder} showYear={true} groupYears={false}/>
</section>

<section class="layout-md">
  <h2 class="heading2">Publications:</h2>
  <PublicationList data={publications} dataOrder={dataOrder}/>
</section>
