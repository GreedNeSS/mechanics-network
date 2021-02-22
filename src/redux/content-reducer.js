import { authUser } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializing = () => (dispatch) => {
	Promise.all([dispatch(authUser())])
		.then(() => dispatch(setInitialized()));
}


let initialState = {
	isInitialized: false,
};

const contentReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_INITIALIZED: {
			return {
				...state,
				isInitialized: true,
			}
		}

		default:
			return state;
	}

}

export default contentReducer;