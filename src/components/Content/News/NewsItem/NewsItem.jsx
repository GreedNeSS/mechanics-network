import { NavLink } from "react-router-dom";
import css from "./NewsItem.module.css";

function NewsItem(props) {
	let coments;
	if (props.class) {
		coments = css[props.class];
	} else {
		coments = false;
	}

	let wraper;
	let image;
	if (props.image) {
		image = css.image;
		wraper = css.wraper;
	} else {
		image = false;
		wraper = false;
	}

	let path = '/News/' + props.id;

	return (
		<NavLink to={{
			pathname: path,
			props: props
		}} >
			<div className={`${css.NewsItem} ${coments}`}>
				<h2 className={css.title}>
					{props.title}
				</h2>
				<div className={wraper}>
					<img src={props.image} className={image} alt="" />
				</div>
				<div className={css.text}>
					{props.text}
				</div>
			</div>
		</NavLink>
	)
}

export default NewsItem;