import { api } from "../config/api";

export async function login(email, password) {
  const loginRes = await api.post('/auth/login', {email, password}).catch((error) => {
    console.error(error.message);
  });

  if(loginRes?.status === 200) {
    localStorage.setItem('authToken', loginRes.data.token);
  }
}
export async function register(payload) {
  return await api.post('/auth/register', payload)
    .then((data)=>{
      localStorage.setItem('authToken', data.token);
      return {
        status: 200,
        message: 'Successfully registered !'
      }
    }).catch((error) => {
      debugger
      return {
        status: 400,
        errors: error.response?.data?.errors,
        message:  error.response?.data?.message || 'Something went wrong !'
      };
    });

}
