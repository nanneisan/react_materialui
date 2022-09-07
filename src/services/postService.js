//services
import httpService from "./httpService";

//constants
import endpoints from "../constants/api";

export async function getAllPost(query) {
  return await httpService.get(`${endpoints.Post}/`, { params: query });
}

export async function searchPost(title) {
  return await httpService.get(`${endpoints.Post}/search?title=${title}`);
}
