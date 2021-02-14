import { Field, reduxForm } from "redux-form";
import { ButtonSubmit } from "../../commons/CustomButton";
import { CustomCheckbox } from "../../commons/CustomCheckbox";
import { CustomizedInputs } from "../../commons/stylesContainer";
import { required, maxLength15, maxLength30 } from "../../../utils/validators";
import css from "./LoginForm.module.css";


let LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={css.formItem}>
				<Field name='email' placeholder='Введите: login'
					validate={[required, maxLength30]} id='1'
					type='text' component={CustomizedInputs} />
			</div>
			<div className={css.formItem}>
				<Field name='password' placeholder='Введите: password'
					validate={[required, maxLength15]} id='2'
					type='password' component={CustomizedInputs} />
			</div>
			<div className={css.formItem}>
				<Field name='rememberMe' type='checkbox' component={CustomCheckbox} /> запомнить меня
			</div>
			<div className={css.formItem}>
				<ButtonSubmit buttonName='Авторизация' />
			</div>

		</form>
	)
}

LoginForm = reduxForm({
	form: 'login'
})(LoginForm);

export default LoginForm;