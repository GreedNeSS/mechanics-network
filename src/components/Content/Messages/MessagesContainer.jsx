import { addMessageActionCreator, writeMessageActionCreator } from "../../../redux/messages-reduser";
import Messages from "./Messages";



function MessagesContainer(props) {
	let state = props.store.getState().messages;

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	let onChangeMessage = (event) => {
		let text = event.target.value;
		let action = writeMessageActionCreator(text);

		props.store.dispatch(action);
	}

	let onKeyPress = (event) => {
		if (event.key === 'Enter') {
			props.store.dispatch(addMessageActionCreator());

			event.preventDefault();
		}
	}

	return (
		<Messages dialogs={state.dialogs}
			newTextMessages={state.newTextMessages}
			messageItems={state.messageItems}
			onKeyPress={onKeyPress}
			onChangeMessage={onChangeMessage}
			addMessage={addMessage} />
	)
}

export default MessagesContainer;