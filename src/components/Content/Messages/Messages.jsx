import Dialogs from "./Dialogs/Dialogs";
import MessageItems from "./MessageItems/MessageItems";
import css from "./Messages.module.css";



function Messages(props) {

	return (
		<div className={css.Messages}>
			<Dialogs dialogs={props.dialogs} />
			<MessageItems
				messageItems={props.messageItems}
				sendMessage={props.sendMessage}
			/>
		</div>
	)
}

export default Messages;