import { api } from "../config/api";
const token = localStorage.getItem('authToken')

export function getPreferences() {
	return api.get('/preferences', {headers: {
			Authorization: `Bearer ${token}`,
			Accept :'application/json',
		}}).then((result) => {
		return result.data?.preferences;
	});
}
export function updatePreferences(preferences) {
	return api.post('/preferences', {...preferences}, {headers: {
			Authorization: `Bearer ${token}`,
			Accept :'application/json',
		}}).then((result) => {
		return result.data;
	});
}
