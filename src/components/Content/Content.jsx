import css from "./Content.module.css";
import { Route } from "react-router-dom";
import Main from "./Main/Main";
import ArticlesContainer from "./Articles/ArticlesContainer";
import Contacts from "./Contacts/Contacts";
import Article from "./Article/Article";
import NewsContainer from "./News/NewsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";


function Content() {
	return (

		<div className={css.Content}>

			<Route component={Main} path='/' exact />
			<Route render={() => <ArticlesContainer />} path='/articles' />
			<Route render={() => <NewsContainer />} path='/news' exact />
			<Route component={Contacts} path='/contacts' />
			<Route component={Article} path='/news/*' />
			<Route render={() =>
				<MessagesContainer />} path='/messages' />
			<Route render={() => <UsersContainer />} path='/users' />
			<Route render={() => <ProfileContainer />} path='/profile/:userId?' />

		</div>

	)
}

export default Content;