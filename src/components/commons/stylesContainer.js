import { withStyles } from '@material-ui/core/styles';
import { CustomInput } from "./CustomForms";



const styles = {
	root: {
		color: 'white',
		'& label.Mui-focused': {
			color: 'rgb(114, 205, 221)',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: 'red',
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


export let CustomizedInputs = withStyles(styles)(CustomInput);