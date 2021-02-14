import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export const ButtonSubmit = (props) => <Butt buttonName={props.buttonName} />;

export const ButtonOnClick = (props) => <Butt buttonName={props.buttonName} onClick={props.onClick} />;

export const ButtonLink = (props) => {
	const classes = useStyles();
	return (
		<Button
			color="primary"
			variant="contained"
			className={classes.button}
			type='button'
			component={NavLink}
			to={props.to}
		>
			{props.buttonName}
		</Button>
	)
}


const Butt = (props) => {
	const classes = useStyles();
	if (props.onClick) {
		return (
			<Button
				onClick={props.onClick}
				color="primary"
				variant="contained"
				className={classes.button}
				type='button'
			>
				{props.buttonName}
			</Button>
		)
	} else {
		return (
			<Button
				color="primary"
				variant="contained"
				className={classes.button}
				type='submit'
			>
				{props.buttonName}
			</Button>
		)
	}
}
