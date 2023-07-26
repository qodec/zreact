import { BaseURL } from "../config";

export async function getPhotos() {
  let data = await fetch(BaseURL + "/photos");
  console.log("Getting from Server...");
  return await data.json();
}
