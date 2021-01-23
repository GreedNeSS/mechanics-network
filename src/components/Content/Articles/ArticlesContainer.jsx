import { connect } from "react-redux";
import Articles from "./Articles";


const mapStateToProps = (state) => {
	return {
		articles: state.articles
	}
}

const ArticlesContainer = connect(mapStateToProps)(Articles);

export default ArticlesContainer;