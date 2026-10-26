import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
  const [publicationsResponse, talksResponse] = await Promise.all([
    fetch("parse-bibtex-pubs?file=bibfile"),
    fetch("parse-bibtex-talks?file=talks"),
  ]);
  const [bibtex, talks] = await Promise.all([
    publicationsResponse.text(),
    talksResponse.text(),
  ]);

  return { bibtex, talks }
}
