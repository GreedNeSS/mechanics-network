import Dialogs from "./Dialogs/Dialogs";
import MessageItems from "./MessageItems/MessageItems";
import css from "./Messages.module.css";



function Messages(props) {
	return (
		<div className={css.Messages}>
			<Dialogs dialogs={props.messages.dialogs} />
			<MessageItems messageItems={props.messages.messageItems}
				addMessage={props.addMessage}
				writeMessage={props.writeMessage}
				newTextMessages={props.messages.newTextMessages} />
		</div>
	)
}

export default Messages;