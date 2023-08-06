import apiFetch from "./api-fetch";
import pokedexClient from "./pokedex-client";

export async function getFavorites() {
  const data = await pokedexClient("/favorites");
  return data;
}

export async function createFavorite(pokeData) {
  const data = await pokedexClient("/favorites", { body: pokeData });
  return data;
}

export async function deleteFavorite(id) {
  return await pokedexClient(`/favorites/${id}`, { method: "DELETE" });
}
