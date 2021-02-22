import { stopSubmit } from "redux-form";
import { authAPI } from "../API/API";
import { setProfileId } from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const setAuthUserData = (id, email, login, isAuth) => {
	return ({
		type: SET_USER_DATA,
		data: { id, email, login, isAuth },
	})
}

export const authUser = () => async (dispatch) => {
	const response = await authAPI.getAuthMe();
	if (response.resultCode === 0) {
		let { id, email, login } = response.data;
		dispatch(setProfileId(id));
		dispatch(setAuthUserData(id, email, login, true));
	} else {
		console.log(response.messages);
	}
}

export const login = ({ email, password, rememeberMe }) => async (dispatch) => {
	dispatch(toggleIsLoading(true));
	const response = await authAPI.login(email, password, rememeberMe)
	if (response.resultCode === 0) {
		dispatch(authUser());
	} else {
		const action = stopSubmit('login', {
			email: response.messages,
			password: response.messages
		});
		dispatch(action);
		console.log(response.messages);
	}
	dispatch(toggleIsLoading(false));
}

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout()
	if (response.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	} else {
		console.log(response.messages);
	}
}



let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isLoading: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER_DATA:
			return {
				...state,
				...action.data,
			}

		case TOGGLE_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			}

		default:
			return state;
	}

}

export default authReducer;

