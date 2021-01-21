import css from "./MessageItems.module.css";
import React from "react";
import { addMessageActionCreator, writeMessageActionCreator } from "../../../../redux/messages-reduser";


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
		props.dispatch(addMessageActionCreator());
	}

	let newMyMessage = (event) => {
		// let text = newMessageElement.current.value; //! можно и через реферальную ссылку, но лучше через эвент

		let text = event.target.value;
		let action = writeMessageActionCreator(text);

		props.dispatch(action);
	}

	let handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			props.dispatch(addMessageActionCreator());

			event.preventDefault();
		}
	}

	return (
		<div className={css.MessageItems}>
			{messages}
			<div className={css.addMessage}>
				<textarea rows='1'
					onKeyPress={handleKeyPress}
					onChange={newMyMessage}
					value={props.newTextMessages}
					// ref={newMessageElement} //! можно и через реферальную ссылку, но лучше через эвент
					className={css.newMess} />
				<button className={css.button} onClick={addMessageItem}>Отправить</button>
			</div>
		</div>
	)
}

export default MessageItems;
