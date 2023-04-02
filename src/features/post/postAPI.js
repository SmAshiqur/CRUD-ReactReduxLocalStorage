import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  return await axios.get(`${API_ENDPOINT}?_start=0&_limit=10`);
}
