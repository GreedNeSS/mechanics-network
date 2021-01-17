import logo from '../../img/logo.svg';
import Clock from './Clock/Clock';
import css from "./Header.module.css";


const Header = () => {
	return (
		<div className={css.Header}>
			<img src={logo} alt="logo" className={css.logo} />
			<Clock />
			<h1 className={css.item}>
				ООО "Тулалифт"
			</h1>
			<span>Тел. +7(472)34-31-37</span>
		</div>
	)
}

export { Header };