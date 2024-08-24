import fs from "fs";

/**
export async function GET() {
    const text = fs.readFileSync("static/assets/tex/bibfile.bib");
    return {
        post: { text },
    };
}
*/

import { readFile } from 'fs'
import { marked } from 'marked'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
  const getBibTex = () => {
    return new Promise((resolve, reject) => {
      //readFile(`src/lib/copy/intro.md`, 'utf8', (err, data) => {
      fs.readFileSync("static/assets/tex/bibfile.bib", (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    })
  }

  let bibtex = (await getBibTex()) as string
  //let html = marked(markdown)

  return new Response(bibtex, {
    headers: {
      'content-type': 'text/bib',
    },
  })
}
