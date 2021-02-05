import { authAPI } from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserData = (id, email, login) => {
	return ({
		type: SET_USER_DATA,
		data: { id, email, login },
	})
}

export const authUser = () => (dispatch) => {
	authAPI.getAuthMe()
		.then(response => {
			if (response.resultCode === 0) {
				let { id, email, login } = response.data;
				dispatch(setAuthUserData(id, email, login));
			} else {
				console.log(response.messages);
			}
		})
}



let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReduser = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true,
			}

		default:
			return state;
	}

}

export default authReduser;

