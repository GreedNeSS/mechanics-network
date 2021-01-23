import css from "./Content.module.css";
import { Route } from "react-router-dom";
import Main from "./Main/Main";
import ArticlesContainer from "./Articles/ArticlesContainer";
import Contacts from "./Contacts/Contacts";
import Article from "./Article/Article";
import NewsContainer from "./News/NewsContainer";
import MessagesContainer from "./Messages/MessagesContainer";


function Content(props) {
	return (

		<div className={css.Content}>

			<Route component={Main} path='/' exact />
			<Route render={() => <ArticlesContainer store={props.store} />} path='/Articles' />
			<Route render={() => <NewsContainer store={props.store} />} path='/News' exact />
			<Route component={Contacts} path='/Contacts' />
			<Route component={Article} path='/News/*' />
			<Route render={() =>
				<MessagesContainer />} path='/Messages' />

		</div>

	)
}

export default Content;