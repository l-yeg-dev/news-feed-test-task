import { api } from "../config/api";

export async function login(email, password) {
  const loginRes = await api.post('/auth/login', {email, password}).catch((error) => {
    console.error(error.message);
  });

  if(loginRes?.status === 200) {
    localStorage.setItem('isLoggedIn', loginRes.token);
  }
}