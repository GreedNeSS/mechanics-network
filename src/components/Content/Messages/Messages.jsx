import Dialogs from "./Dialogs/Dialogs";
import MessageItems from "./MessageItems/MessageItems";
import css from "./Messages.module.css";



function Messages(props) {
	return (
		<div className={css.Messages}>
			<Dialogs dialogs={props.dialogs} />
			<MessageItems messageItems={props.messageItems}
				newTextMessages={props.newTextMessages}
				onKeyPress={props.onKeyPress}
				onChangeMessage={props.onChangeMessage}
				addMessage={props.addMessage} />
		</div>
	)
}

export default Messages;