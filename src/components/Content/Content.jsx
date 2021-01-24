import css from "./Content.module.css";
import { Route } from "react-router-dom";
import Main from "./Main/Main";
import ArticlesContainer from "./Articles/ArticlesContainer";
import Contacts from "./Contacts/Contacts";
import Article from "./Article/Article";
import NewsContainer from "./News/NewsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";


function Content(props) {
	return (

		<div className={css.Content}>

			<Route component={Main} path='/' exact />
			<Route render={() => <ArticlesContainer />} path='/Articles' />
			<Route render={() => <NewsContainer />} path='/News' exact />
			<Route component={Contacts} path='/Contacts' />
			<Route component={Article} path='/News/*' />
			<Route render={() =>
				<MessagesContainer />} path='/Messages' />
			<Route render={() => <UsersContainer />} path='/Users' />

		</div>

	)
}

export default Content;