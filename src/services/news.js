import { api } from "../config/api";

export function getNews({filters}) {
  return api.get('/news', {params: {...filters}});
}
