const WRITE_MESSAGE = 'WRITE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const writeMessageActionCreator = (text) => ({
	type: WRITE_MESSAGE,
	text: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });


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
	newTextMessages: ''
};

const messagesReduser = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE: {
			const message = {
				name: false,
				message: state.newTextMessages
			}

			return {
				...state,
				messageItems: [...state.messageItems, message],
				newTextMessages: ''
			};
		}
		case WRITE_MESSAGE: {
			return {
				...state,
				newTextMessages: action.text
			}
		}
		default:
			return state;
	}

}

export default messagesReduser;

