import apiFetch from "./api-fetch";
import { tokenKey } from "../config";

export async function login(formData) {
  const { token, ...user } = apiFetch("/login", { body: formData });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  const { token, ...user } = apiFetch("/logout", { body: formData });
  sessionStorage.removeItem(tokenKey);
  return user;
}
