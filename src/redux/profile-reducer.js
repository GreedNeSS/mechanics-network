import { clearFields } from "redux-form";
import { profileAPI } from "../API/API";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PROFILE_ID = 'SET_PROFILE_ID';
const SET_PROFILE_AVATAR = 'SET_PROFILE_AVATAR';

export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});
export const setProfileId = (profileId) => ({
	type: SET_PROFILE_ID,
	profileId,
});
export const setProfile = (profile) => ({
	type: SET_PROFILE,
	profile,
});
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setProfileAvatar = (photo) => ({ type: SET_PROFILE_AVATAR, photo });

export const sendPost = ({ newPostText }) => (dispatch) => {
	if (newPostText) {
		dispatch(addPost(newPostText));
		dispatch(clearFields('post', true, true, ...['newPostText']));
	}
}

export const getProfile = (userId, ownId) => async (dispatch) => {
	let id = userId || ownId;
	let response = await profileAPI.getProfile(id);
	dispatch(setProfile(response));
}

export const getProfileStatus = (userId, ownId) => async (dispatch) => {
	let id = userId || ownId;
	let response = await profileAPI.getStatus(id);
	dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.setProfileStatus(status);
	if (response.resultCode === 0) {
		dispatch(setStatus(status));
	} else {
		console.log(response.messages);
	}
}

export const uploadAvatar = (photo) => async (dispatch) => {
	let response = await profileAPI.setProfileAvatarSuccess(photo);
	if (response.resultCode === 0) {
		dispatch(setProfileAvatar(response.data.photos));
	} else {
		console.log(response.messages);
	}
}

export const editProfile = (data) => async (dispatch, getState) => {
	let id = getState().auth.id;
	let response = await profileAPI.setProfileInfo(data);
	if (response.resultCode === 0) {
		await dispatch(getProfile(null, id));
	} else {
		console.log(response.messages);
		return Promise.reject(response.messages);
	}
}


let initialState = {
	profileId: null,
	profile: null,
	profileStatus: '',
	photo: '',
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
				id: Math.round(Math.random() * 10000),
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

		case SET_PROFILE_AVATAR: {
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.photo
				}
			}
		}

		case SET_PROFILE_ID: {
			return {
				...state,
				profileId: action.profileId
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

