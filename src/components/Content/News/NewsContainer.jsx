import News from "./News";

function NewsContainer(props) {
	return <News news={props.store.getState().news} />
}

export default NewsContainer;