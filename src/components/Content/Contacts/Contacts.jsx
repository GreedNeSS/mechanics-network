import css from "./Contacts.module.css";


function Contacts() {
	return (
		<div>
			<div className={css.title}>Контакты</div>
			<div className={css.item}>Тел. +7(472)34-31-37</div>
			<div className={css.item}>Email: rtulalift@gmail.com</div>
		</div>
	)
}

export default Contacts;