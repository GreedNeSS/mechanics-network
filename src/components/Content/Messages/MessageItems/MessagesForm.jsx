import css from "./MessageItems.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLength50, required } from "../../../../utils/validators";
import { CustomizedInputs } from "../../../commons/stylesContainer";
import { ButtonSubmit } from "../../../commons/CustomButton";


let MessagesForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={css.addMessage}>
			<Field component={CustomizedInputs}
				placeholder='Введите сообщение'
				name='newMessageText'
				className={css.newMess}
				rows='1'
				validate={[maxLength50]}
			/>
			<ButtonSubmit buttonName='Отправить' />
		</form>
	)
}

MessagesForm = reduxForm({
	form: 'messages'
})(MessagesForm);

export default MessagesForm;