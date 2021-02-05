import { applyMiddleware, combineReducers, createStore } from "redux";
import articleReduser from "./article-reduser";
import authReduser from "./auth-reduser";
import messagesReduser from "./messages-reduser";
import newsReduser from "./news-reduser";
import profileReduser from "./profile-reduser";
import usersReduser from "./users-reduser";
import thunkMiddleWare from "redux-thunk";


let redusers = combineReducers({
	messages: messagesReduser,
	articles: articleReduser,
	news: newsReduser,
	users: usersReduser,
	profile: profileReduser,
	auth: authReduser,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleWare));

export default store;

window.store = store;