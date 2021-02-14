import css from "../../utils/CustomForms.module.css";
import React from 'react';
import TextField from '@material-ui/core/TextField';


export function CustomInput({
	input,
	type,
	placeholder,
	meta: { touched, error, warning },
	classes,
	id,
}) {
	return (
		<TextField id="outlined-basic"
			label={placeholder}
			variant="outlined"
			type={type}
			classes={{ root: css.text }}
			error={error ? true : false}
			id={id}
			// id="standard-error-helper-text"
			helperText={(touched && error) ? error : null}
			{...input}
			defaultValue="color"
			className={classes.root}
			InputProps={{
				className: classes.input
			}} />
	);
}
