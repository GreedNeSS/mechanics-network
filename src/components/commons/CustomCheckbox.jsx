import { Checkbox } from "@material-ui/core";


export function CustomCheckbox({
	input,
}) {

	return (
		<Checkbox
			{...input}
			color="primary"
		/>
	);
}
