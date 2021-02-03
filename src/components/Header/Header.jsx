import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.svg';
import Clock from './Clock/Clock';
import css from "./Header.module.css";


const Header = (props) => {
	return (
		<div className={css.Header}>
			<img src={logo} alt="logo" className={css.logo} />
			<Clock />
			<h1 className={css.item}>
				ООО "Тулалифт"
			</h1>
			<div>
				{
					props.isAuth ?
						props.login :
						<NavLink to='/login'>Login</NavLink>
				}
			</div>
		</div>
	)
}

export default Header;