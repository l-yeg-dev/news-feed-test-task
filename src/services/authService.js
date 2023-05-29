import { api } from "../config/api";

export async function login(email, password) {
  return await api.post('/auth/login', {email, password})
    .then((response) => {
      localStorage.setItem('authToken', response.data.token);

      return {
        status: 200,
        message: 'Successfully logged in !'
      }
    }).catch((error) => {
      return {
        status: 400,
        errors: error.response?.data?.errors,
        message:  error.response?.data?.message || 'Something went wrong !'
      };
  });
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
      return {
        status: 400,
        errors: error.response?.data?.errors,
        message:  error.response?.data?.message || 'Something went wrong !'
      };
    });

}
