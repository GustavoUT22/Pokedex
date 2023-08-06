import apiFetch from "./pokedex-client";
import { tokenKey } from "../config";
import pokedexClient from "./pokedex-client";

export async function createUser(formData) {
  const { token, ...user } = await pokedexClient("/signup", { body: formData });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(formData) {
  const { token, ...user } = await pokedexClient("/porfile", {
    body: formData,
    method: "PATCH",
  });
}

export async function getUser() {
  const { token, ...user } = await pokedexClient("/profile", { method: "GET" });
  return user;
}
