import { reset, clearFields } from "redux-form";

const ADD_MESSAGE = 'ADD-MESSAGE';

export const addMessage = (text) => ({ type: ADD_MESSAGE, text });
export const sendMessage = ({ newMessageText }) => (dispatch) => {
	if (newMessageText) {
		dispatch(addMessage(newMessageText));
		dispatch(reset("messages"));
		// dispatch(clearFields('messages', true, true, ...['newMessageText']));
	}
}


let initialState = {
	dialogs: [
		{
			id: 1,
			name: 'Ruslan'
		}, {
			id: 2,
			name: 'Roman'
		}, {
			id: 3,
			name: 'Alex'
		}, {
			id: 4,
			name: 'Alex'
		}, {
			id: 5,
			name: 'Andrey'
		}, {
			id: 6,
			name: 'Egor'
		}, {
			id: 7,
			name: 'Ruslan'
		},
	],
	messageItems: [
		{
			name: false,
			message: 'Hello'
		},
		{
			name: 'Roman',
			message: 'Hi'
		},
		{
			name: false,
			message: 'You from'
		},
		{
			name: 'Roman',
			message: 'From russia'
		},
		{
			name: false,
			message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam cum maxime omnis neque ad? Consequuntur necessitatibus accusantium, placeat pariatur rem, distinctio eligendi quia minima natus unde, dicta aspernatur! Consectetur, debitis!'
		}
	],
};

const messagesReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE: {
			const message = {
				name: false,
				message: action.text
			}

			return {
				...state,
				messageItems: [...state.messageItems, message],
			};
		}
		default:
			return state;
	}

}

export default messagesReducer;

