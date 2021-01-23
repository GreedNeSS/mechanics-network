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

	// let newMessageElement = React.createRef();

	let addMessageItem = () => {
		props.addMessage();
	}

	let onChangeMyMessage = (event) => {
		props.onChangeMessage(event);
	}

	let handleKeyPress = (event) => {
		props.onKeyPress(event);
	}

	return (
		<div className={css.MessageItems}>
			{messages}
			<div className={css.addMessage}>
				<textarea rows='1'
					onKeyPress={handleKeyPress}
					onChange={onChangeMyMessage}
					value={props.newTextMessages}
					// ref={newMessageElement} //! можно и через реферальную ссылку, но лучше через эвент
					className={css.newMess} />
				<button className={css.button} onClick={addMessageItem}>Отправить</button>
			</div>
		</div>
	)
}

export default MessageItems;
