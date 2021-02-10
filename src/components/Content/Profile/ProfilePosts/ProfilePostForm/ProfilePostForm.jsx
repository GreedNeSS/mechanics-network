import { Field, reduxForm } from "redux-form";
import css from "./ProfilePosts.module.css";


let ProfilePostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field rows='1'
				component='textarea'
				placeholder='Новый пост'
				name='newPostText'
				className={css.textarea} />
			<button className={css.button}>Отправить</button>
		</form>
	)
}


ProfilePostForm = reduxForm({
	form: 'post'
})(ProfilePostForm);

export default ProfilePostForm;