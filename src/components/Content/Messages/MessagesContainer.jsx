import { connect } from "react-redux";
import { addMessageActionCreator, writeMessageActionCreator } from "../../../redux/messages-reduser";
import Messages from "./Messages";


const mapStateToProps = (state) => {
	return {
		dialogs: state.messages.dialogs,
		messageItems: state.messages.messageItems,
		newTextMessages: state.messages.newTextMessages
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onKeyPress: (event) => {
			if (event.key === 'Enter') {
				dispatch(addMessageActionCreator());
				event.preventDefault();
			}
		},

		onChangeMessage: (event) => {
			let text = event.target.value;
			let action = writeMessageActionCreator(text);
			dispatch(action);
		},

		addMessage: () => dispatch(addMessageActionCreator())
	}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;