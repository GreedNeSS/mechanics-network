import css from "./MessageItems.module.css";
import React from "react";


function MessageItems(props) {

	let messages = props.messageItems.map(message => {
		if (message.name) {
			return (
				<div className={css.message}>
					<div className={css.name}>{message.name + ':  '}</div>
					<div>{message.message}</div>
				</div>
			);
		}

		return (
			<div className={`${css.myMessage}`}>
				<div className={css.name}>My message:  </div>
				<div>{message.message}</div>
			</div>
		)
	})

	let newMessageElement = React.createRef();

	let addMessage = () => {
		let text = props.newTextMessages;
		props.addMessage(text);
	}

	let newMyMessage = () => {
		let text = newMessageElement.current.value;
		props.writeMessage(text);
	}

	return (
		<div className={css.MessageItems}>
			{messages}
			<div className={css.addMessage}>
				<textarea rows='1' onChange={newMyMessage} value={props.newTextMessages} ref={newMessageElement} className={css.newMess} />
				<button className={css.button} onClick={addMessage}>Отправить</button>
			</div>
		</div>
	)
}

export default MessageItems;
