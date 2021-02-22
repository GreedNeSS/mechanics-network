import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

// ! Кастомизация кнопок на будующее

// const useStyles = makeStyles((theme) => ({
// 	button: {
// 		margin: theme.spacing(1),
// 		backgroundColor: 'yellow',
// 		"&:hover": {
// 			backgroundColor: 'red',
// 		}
// 	},
// }));


const ButtonCustom = (buttonName, type, props = {}) => {
	const classes = useStyles();
	return (
		<Button
			{...props}
			color="primary"
			variant="contained"
			className={classes.button}
			type={type}
		>
			{buttonName}
		</Button>
	)
}


export const ButtonLink = (props) => ButtonCustom(props.buttonName, 'button', { component: NavLink, to: props.to });

export const ButtonSubmit = (props) => ButtonCustom(props.buttonName, 'submit');

export const ButtonOnClick = (props) => ButtonCustom(props.buttonName, 'button', { onClick: props.onClick });