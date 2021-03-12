import css from "../../utils/CustomForms.module.css";
import React from 'react';
import TextField from '@material-ui/core/TextField';


export function CustomInput(props) {
	let {
		input,
		type,
		placeholder,
		meta: { touched, error, warning },
		classes,
		id,
	} = props;
	return (
		<TextField
			label={placeholder}
			variant="outlined"
			type={type}
			classes={{ root: css.text }}
			error={error ? true : false}
			id={id}
			helperText={(touched && error) ? error : null}
			{...input}
			className={classes.root}
			InputProps={{
				className: classes.input
			}}
		/>
	);
}
