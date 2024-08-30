import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const res_bibfile = await fetch(`parse-bibtex-pubs?file=bibfile`)
  const bibtex = await res_bibfile.text()

  //const res_talks = await fetch(`parse-bibtex?file=talks`)
  //const talks = await res_talks.text()
  return {bibtex}
}
