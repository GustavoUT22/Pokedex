import apiFetch from "./api-fetch";

export async function getFavorites() {
  const data = await apiFetch("/favorites");
  return data;
}

export async function createFavorite(pokeData) {
  const data = await apiFetch("/favorites", { body: pokeData });
  return data;
}

export async function deleteFavorite(id) {
  return await apiFetch(`/favorites/${id}`, { method: "DELETE" });
}
