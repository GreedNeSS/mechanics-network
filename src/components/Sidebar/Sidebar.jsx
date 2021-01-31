import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.css";

function NLink(props) {
	if (props.exact) {
		return (
			<nav className={css.Sidebar_item}>
				<NavLink key={props.value} to={props.path} activeClassName={css.active} exact>{props.value}</NavLink>
			</nav>
		)
	}
	return (
		<nav className={css.Sidebar_item}>
			<NavLink key={props.value} to={props.path} activeClassName={css.active}>{props.value}</NavLink>
		</nav>
	)
}

function Sidebar() {
	return (

		<div className={css.Sidebar}>
			<NLink path='/' value=' Главная ' exact='true' />
			<NLink path='/users' value=' Пользователи ' />
			<NLink path='/messages' value=' Сообщения ' />
			<NLink path='/articles' value=' Статьи ' />
			<NLink path='/news' value=' Новости ' />
			<NLink path='/contacts' value=' Контакты ' />
		</div>

	)
}

export default Sidebar;