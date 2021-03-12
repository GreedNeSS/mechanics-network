import { Checkbox, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { ButtonOnClick, ButtonSubmit } from "../../../commons/CustomButton";
import { withStyles } from '@material-ui/core/styles';



const styles = {
	root: {
		color: 'white',
		'& label.Mui-focused': {
			color: 'rgb(114, 205, 221)',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'rgb(114, 205, 221)',
		},
		'& .Mui-error': {
			'& fieldset': {
				borderColor: 'red',
			}
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'grey',
			},
			'&:hover fieldset': {
				borderColor: 'white',
			},
			'&.Mui-focused fieldset': {
				borderColor: 'rgb(114, 205, 221)',
			},
		},
	},
	input: {
		color: "white"
	},
	label: {
		color: 'rgb(114, 205, 221)'
	},

};



const ProfileEdit = (props) => {
	const { register, handleSubmit, errors, setError } = useForm();
	let fullNameError;

	const onSubmite = (data) => {
		props.editProfile(data)
			.then(
				() => props.setIsEdit(false),
				(message) => setError('fullName', {
					type: 'server',
					message: message
				})
			);
	}

	switch (errors.fullName?.type) {
		case 'server':
			fullNameError = 'Ошибка сервера';
			break;

		case 'required':
			fullNameError = "Обязательное поле ввода";
			break;

		case 'maxLength':
			fullNameError = "Максимум 15 символов";
			break;

		default:
			fullNameError = '';
			break;
	}

	let aboutMeError;

	switch (errors.aboutMe?.type) {
		case 'maxLength':
			aboutMeError = "Максимум 40 символов";
			break;

		default:
			aboutMeError = '';
			break;
	}

	return (
		<form onSubmit={handleSubmit(onSubmite)}>
			<div>
				<TextField
					inputRef={register({ required: true, maxLength: 15 })}
					label='Введите полное имя'
					name='fullName'
					error={errors.fullName ? true : false}
					helperText={fullNameError || errors.fullName?.message}
					variant="outlined"
					className={props.classes.root}
					InputProps={{
						className: props.classes.input
					}}
				/>

			</div>
			<div>
				<Checkbox inputRef={register} name='lookingForAJob' /> Ищу работу!
			</div>
			<div>
				<TextField
					inputRef={register}
					label='Какую работу?'
					name='lookingForAJobDescription'
					variant="outlined"
					className={props.classes.root}
					InputProps={{
						className: props.classes.input
					}}
				/>
			</div>
			<div>
				<TextField
					inputRef={register({ maxLength: 40 })}
					label='О Себе'
					name='aboutMe'
					variant="outlined"
					error={errors.aboutMe ? true : false}
					helperText={aboutMeError}
					className={props.classes.root}
					InputProps={{
						className: props.classes.input
					}}
				/>
			</div>
			<ButtonSubmit buttonName='Сохранить' />
			<ButtonOnClick onClick={() => props.setIsEdit(false)} buttonName='Отмена' />
		</form>
	)
}


const ProfileEditContainer = withStyles(styles)(ProfileEdit);
export default ProfileEditContainer;
