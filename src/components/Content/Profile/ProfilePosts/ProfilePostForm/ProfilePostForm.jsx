import { Field, reduxForm } from "redux-form";
import { maxLength30 } from "../../../../../utils/validators";
import css from "./ProfilePosts.module.css";
import { makeStyles } from '@material-ui/core/styles';
import { CustomizedInputs } from "../../../../commons/stylesContainer";
import { ButtonSubmit } from "../../../../commons/CustomButton";


const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));


let ProfilePostForm = props => {
	const classes = useStyles();
	return (
		<form onSubmit={props.handleSubmit} className={classes.root} autoComplete="off">
			<Field
				component={CustomizedInputs}
				placeholder='Новый пост'
				name='newPostText'
				validate={[maxLength30]} />
			<ButtonSubmit buttonName='Опубликовать пост' />
		</form>
	)
}


ProfilePostForm = reduxForm({
	form: 'post'
})(ProfilePostForm);

export default ProfilePostForm;