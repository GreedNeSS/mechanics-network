const WRITE_POST = 'WRITE_POST';
const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';

export const writePost = (text) => ({
	type: WRITE_POST,
	text: text,
});

export const setProfile = (profile) => ({
	type: SET_PROFILE,
	profile,
});

export const addPost = () => ({ type: ADD_POST });


let initialState = {
	profileId: 2,
	profile: null,
	newTextPost: '',
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

const profileReduser = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:

			let post = {
				id: Math.round(Math.random() * 1000),
				text: state.newTextPost
			}

			return {
				...state,
				newTextPost: '',
				posts: [...state.posts, post],
			}

		case WRITE_POST: {
			return {
				...state,
				newTextMessages: action.text
			}
		}

		case SET_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}

		default:
			return state;
	}

}

export default profileReduser;

