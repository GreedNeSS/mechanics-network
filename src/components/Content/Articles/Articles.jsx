import Article from "../Article/Article";
import { } from "./Articles.module.css";


function Articles(props) {
	console.log(props);
	let articles = props.articles.map(a => <Article title={a.title} text={a.text} image={a.image} class={a.class} />);

	return (
		<div className="Articles">
			{articles}
		</div>
	)
}

export default Articles;