import css from "./Intro_img.module.css";


function IntroImg(props) {
	return (
		<div className={css.wraper}>
			<img src={props.image} className={css.image} alt="lift" />
		</div>
	)
}

export default IntroImg;