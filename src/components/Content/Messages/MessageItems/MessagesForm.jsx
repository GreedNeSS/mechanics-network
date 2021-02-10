import css from "./MessageItems.module.css";
import { Field, reduxForm } from "redux-form";


let MessagesForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={css.addMessage} >
			<Field component='textarea' placeholder='Введите сообщение' name='newMessageText' className={css.newMess} rows='1' />
			<button className={css.button}>
				Отправить
			</button>
		</form>
	)
}

MessagesForm = reduxForm({
	form: 'messages'
})(MessagesForm);

export default MessagesForm;