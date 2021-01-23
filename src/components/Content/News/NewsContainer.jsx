import { connect } from "react-redux";
import News from "./News";


const mapStateToProps = (state) => {
	return {
		news: state.news
	}
}

const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;