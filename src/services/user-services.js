import apiFetch from "./api-fetch";
import { tokenKey } from "../config";

export async function singup(formData) {
  const { token, ...user } = await apiFetch("/signup", { body: formData });
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function update(formData) {
  const { token, ...user } = await apiFetch("/porfile", {
    body: formData,
    method: "PATCH",
  });
}

export async function getUser() {
  const { token, ...user } = await apiFetch("/profile", { method: "GET" });
  return user;
}
