import css from './Title.module.css';

const Title = (props) => {
	return (
		<div className={css.Title}>
			<h2>
				{props.title}
			</h2>
		</div>
	)
}

export default Title;