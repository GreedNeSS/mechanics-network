import { profileAPI } from "../API/API";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});
export const setProfile = (profile) => ({
	type: SET_PROFILE,
	profile,
});
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });

export const getProfile = (userId, ownId) => (dispatch) => {
	let id = userId || ownId;
	profileAPI.getProfile(id)
		.then(response => {
			dispatch(setProfile(response));
		});
}

export const getProfileStatus = (id) => (dispatch) => {
	profileAPI.getStatus(id)
		.then(response => {
			dispatch(setStatus(response));
		});
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.setProfileStatus(status)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(setStatus(status));
			} else {
				console.log(response.messages);
			}
		});
}


let initialState = {
	profileId: 14637,
	profile: null,
	profileStatus: '',
	posts: [
		{
			id: 123,
			text: 'Hello World'
		},
		{
			id: 423,
			text: 'Im developer'
		},
		{
			id: 1243,
			text: 'Im Senior'
		},
	],
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:

			let post = {
				id: Math.round(Math.random() * 1000),
				text: action.newPostText
			}

			return {
				...state,
				newTextPost: '',
				posts: [...state.posts, post],
			}

		case SET_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}

		case SET_STATUS: {
			return {
				...state,
				profileStatus: action.status
			}
		}

		default:
			return state;
	}

}

export default profileReducer;
