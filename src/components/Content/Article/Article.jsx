// import { Redirect } from "react-router-dom";
import css from "./Article.module.css";


function Article(props) {

	if (props.location) {
		props = props.location.props
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

	let coments;
	if (props.class) {

		coments = css[props.class];

		return (
			<div className={`${css.Article} ${(coments) ? coments : null}`}>
				<h2 className={css.title}>
					{props.title}
				</h2>
				<div className={wraper}>
					<img src={props.image} className={image} alt="" />
				</div>
				<div className={css.text}>
					{props.text}
				</div>
			</div >
		)
	}

	return (
		<div className={css.Article}>
			<h2 className={css.title}>
				{props.title}
			</h2>
			<div className={wraper}>
				<img src={props.image} className={image} alt="" />
			</div>
			<div className={css.text}>
				{props.text}
			</div>
		</div >
	)
}

export default Article;