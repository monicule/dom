import header from './js/header.js';

const pokeUrl = 'https://upload.wikimedia.org/wikipedia/en/a/a6/Pokémon_Pikachu_art.png';
const mainDOM = document.querySelector('main');
mainDOM.innerHTML = `<img src="${pokeUrl}" alt="Poke poke">`;

header();