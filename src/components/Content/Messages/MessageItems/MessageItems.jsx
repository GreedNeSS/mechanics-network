import css from "./MessageItems.module.css";


function MessageItems(props) {

	let messages = props.messageItems.map(message =>
		<div className={css.message}>
			{message}
		</div>
	)

	return (
		<div className={css.MessageItems}>
			{messages}
		</div>
	)
}

export default MessageItems;
