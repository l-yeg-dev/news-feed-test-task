import { api } from "../config/api";

export function getPreferences() {
	return api.get('/preferences').then((result) => {
		return result.data?.preferences;
	});
}
export function updatePreferences(preferences) {
	return api.post('/preferences', {...preferences}).then((result) => {
		return result.data;
	});
}
