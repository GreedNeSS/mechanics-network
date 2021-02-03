import { combineReducers, createStore } from "redux";
import articleReduser from "./article-reduser";
import authReduser from "./auth-reduser";
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
	auth: authReduser,
});

let store = createStore(redusers);

export default store;

window.store = store;