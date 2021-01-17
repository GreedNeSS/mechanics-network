import { NavLink } from "react-router-dom"
import css from "./Dialogs.module.css";


function Dialogs(props) {
	let dialogs = props.dialogs.map(dialog =>
		<div className={css.dialog}>
			<NavLink to={'/Messages/' + dialog.id} activeClassName={css.active}> {dialog.name} </NavLink>
		</div>
	)

	return (
		<div className={css.Dialogs}>
			{dialogs}
		</div>
	)
}

export default Dialogs;