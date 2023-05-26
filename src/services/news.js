import { api } from "../config/api";

export function getNews() {
  return api.get('/news');
}