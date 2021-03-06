import css from "./MessageItems.module.css";
import React from "react";
import MessagesForm from "./MessagesForm";
import { clearFields } from "redux-form";


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

	return (
		<div className={css.MessageItems}>
			{messages}
			<MessagesForm onSubmit={props.sendMessage} />
		</div>
	)
}

export default MessageItems;
