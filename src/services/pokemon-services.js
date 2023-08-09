const BASE_URI = "https://pokeapi.co/api/v2/pokemon/";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";

export async function getPokemon(query) {
  const response = await fetch(BASE_URI + query.toLowerCase());
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log(response);
    throw new Error("404 Not found");
  }
}

export async function getPokemons() {
  const response = await fetch(BASE_URL);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("404 Not found");
  }
}
