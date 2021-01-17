import css from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";

function News(props) {

	let news = props.news.map(n => <NewsItem id={n.id} title={n.title} class={n.class} text={n.text} image={n.image} />)


	return (
		<div className={css.News}>
			{news}
		</div>
	)
}

export default News;