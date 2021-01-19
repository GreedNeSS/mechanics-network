import css from "./Content.module.css";
import { Route } from "react-router-dom";
import Main from "./Main/Main";
import Articles from "./Articles/Articles";
import Contacts from "./Contacts/Contacts";
import News from "./News/News";
import Article from "./Article/Article";
import Messages from "./Messages/Messages";


function Content(props) {
	return (

		<div className={css.Content}>

			<Route component={Main} path='/' exact />
			<Route render={() => <Articles articles={props.state.articles} />} path='/Articles' />
			<Route render={() => <News news={props.state.news} />} path='/News' exact />
			<Route component={Contacts} path='/Contacts' />
			<Route component={Article} path='/News/*' />
			<Route render={() => <Messages messages={props.state.messages}
				addMessage={props.addMessage}
				writeMessage={props.writeMessage} />} path='/Messages' />

		</div>

	)
}

export default Content;