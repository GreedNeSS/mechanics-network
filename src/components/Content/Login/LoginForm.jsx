import { Field, reduxForm } from "redux-form";
import css from "./LoginForm.module.css";


let LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={css.formItem}>
				<Field name='login' placeholder='Введите: login' type='text' component='input' />
			</div>
			<div className={css.formItem}>
				<Field name='password' placeholder='Введите: password' type='text' component='input' />
			</div>
			<div className={css.formItem}>
				<Field name='rememberMe' type='checkbox' component='input' /> запомнить меня
			</div>
			<div className={css.formItem}>
				<button>Авторизация</button>
			</div>

		</form>
	)
}

LoginForm = reduxForm({
	form: 'login'
})(LoginForm);

export default LoginForm;