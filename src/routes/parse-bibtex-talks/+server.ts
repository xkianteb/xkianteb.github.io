import { readFile } from 'fs'
import type { RequestHandler } from './$types'
import bibtexParse from 'bibtex-parse'

/** https://scottspence.com/posts/load-markdown-via-endpoint-in-sveltekit */
export const GET: RequestHandler = async ({ request }) => {
  const getBibtex = () => {
    const url = new URL(request.url)
    const filename = url.searchParams.get('file')

    return new Promise((resolve, reject) => {
      //readFile('static/assets/tex/bibfile.bib', { encoding: 'utf8', flag: 'r' }, 
      readFile('static/assets/tex/' + filename + '.bib', { encoding: 'utf8', flag: 'r' }, 
      (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    })
  }

  let bibtex = (await getBibtex()) as string

  return new Response(bibtex, {
    headers: {
      'content-type': 'text',
    },
  })
}
