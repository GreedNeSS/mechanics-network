import logo from '../../img/logo.svg';
import Clock from './Clock/Clock';
import css from "./Header.module.css";
import { ButtonLink, ButtonOnClick } from "../commons/CustomButton";


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
					props.isAuth
						? <div> {props.login}
							<div>
								<ButtonOnClick
									buttonName='Выйти'
									onClick={props.logout}
								/>
							</div>
						</div>
						: <ButtonLink to='/login' buttonName='login' />
				}
			</div>
		</div>
	)
}

export default Header;