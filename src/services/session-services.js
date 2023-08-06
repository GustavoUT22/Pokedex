import apiFetch from "./pokedex-client";
import { tokenKey } from "../config";
import pokedexClient from "./pokedex-client";

export async function login(formData) {
  const { token, ...user } = await pokedexClient("/login", { body: formData });
  console.log(user, token);
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  const { token, ...user } = await pokedexClient("/logout", { body: formData });
  sessionStorage.removeItem(tokenKey);
  return user;
}
