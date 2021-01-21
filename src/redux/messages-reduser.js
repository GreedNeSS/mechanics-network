const WRITE_MESSAGE = 'WRITE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const writeMessageActionCreator = (text) => ({
	type: WRITE_MESSAGE,
	text: text,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });


const messagesReduser = (state, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			const message = {
				name: false,
				message: state.newTextMessages
			}
			state.messageItems.push(message);
			state.newTextMessages = '';

			return state;

		case WRITE_MESSAGE:
			state.newTextMessages = action.text;

			return state;

		default:
			return state;
	}

}

export default messagesReduser;

