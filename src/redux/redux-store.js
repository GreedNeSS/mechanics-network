import { combineReducers, createStore } from "redux";
import articleReduser from "./article-reduser";
import messagesReduser from "./messages-reduser";
import newsReduser from "./news-reduser";
import profileReduser from "./profile-reduser";
import usersReduser from "./users-reduser";


let redusers = combineReducers({
	messages: messagesReduser,
	articles: articleReduser,
	news: newsReduser,
	users: usersReduser,
	profile: profileReduser,
});

let store = createStore(redusers);

export default store;