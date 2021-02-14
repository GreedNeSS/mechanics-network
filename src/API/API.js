import axios from "axios";


const inctance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '6c18370b-461f-4bdb-82cb-8c850a80a50b',
	},
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {

	async getUsersPage(currentPage = 1, pageSize = 10) {
		const response = await inctance.get(`users?page=${currentPage}&count=${pageSize}`);
		return response.data;
	},

	async followUser(id) {
		const response = await inctance.post(`follow/${id}`, {});
		return response.data;
	},

	async unFollowUser(id) {
		const response = await inctance.delete(`follow/${id}`);
		return response.data;
	},

};

export const authAPI = {

	async getAuthMe() {
		const response = await inctance.get('auth/me');
		return response.data;
	},

	async logout() {
		const response = await inctance.delete('auth/login');
		return response.data;
	},

	async login(email, password, rememberMe = false) {
		const response = await inctance.post('auth/login', { email, password, rememberMe });
		return response.data;
	},
}

export const profileAPI = {

	async getProfile(userId) {
		const response = await inctance.get('profile/' + userId);
		return response.data;
	},

	async getStatus(userId) {
		const response = await inctance.get('profile/status/' + userId);
		return response.data;
	},

	async setProfileStatus(status) {
		const response = await inctance.put('profile/status/', { status });
		return response.data;
	},
}