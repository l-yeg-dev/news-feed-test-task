import axios from "axios";
const token = () => localStorage.getItem('authToken')
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost';

const api = axios.create({
	baseURL: API_BASE_URL + '/api',
});

api.interceptors.request.use(req => {
	const authToken = token();
	if (authToken) {
		req.headers.Authorization = `Bearer ${authToken}`
	}
	console.log(authToken)
	return req;
});

export { api };
