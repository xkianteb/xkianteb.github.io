import fs from 'fs'
import type { PageLoad } from './$types';

export const load = (async () => {
    //const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const response = await fs.readFile("static/assets/tex/bibfile.bib");

    return {
        pokemons: response
    };
})  satisfies PageLoad;
