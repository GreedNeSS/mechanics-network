import { addMessageActionCreator, writeMessageActionCreator } from "../../../redux/messages-reduser";
import StoreContext from "../../../StoreContext";
import Messages from "./Messages";



function MessagesContainer(props) {

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState().messages;

					let addMessage = () => {
						store.dispatch(addMessageActionCreator());
					}

					let onChangeMessage = (event) => {
						let text = event.target.value;
						let action = writeMessageActionCreator(text);

						store.dispatch(action);
					}

					let onKeyPress = (event) => {
						if (event.key === 'Enter') {
							store.dispatch(addMessageActionCreator());

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
			}
		</StoreContext.Consumer>
	)
}

export default MessagesContainer;