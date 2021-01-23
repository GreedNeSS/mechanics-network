import Articles from "./Articles";


function ArticlesContainer(props) {
	return <Articles articles={props.store.getState().articles} />
}

export default ArticlesContainer;