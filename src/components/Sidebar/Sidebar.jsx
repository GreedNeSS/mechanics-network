import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.css";

function NLink(props) {
	return (
		<nav className={css.Sidebar_item}>
			<NavLink key={props.value} to={props.path} activeClassName={css.active} exact={props.exact}>{props.value}</NavLink>
		</nav>
	)
}

function Sidebar() {
	return (

		<div className={css.Sidebar}>
			<NLink path='/' value=' Главная ' exact='true' />
			<NLink path='/Users' value=' Пользователи ' />
			<NLink path='/Messages' value=' Сообщения ' />
			<NLink path='/Articles' value=' Статьи ' />
			<NLink path='/News' value=' Новости ' />
			<NLink path='/Contacts' value=' Контакты ' />
		</div>

	)
}

export default Sidebar;