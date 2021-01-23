import { combineReducers, createStore } from "redux";
import articleReduser from "./article-reduser";
import messagesReduser from "./messages-reduser";
import newsReduser from "./news-reduser";


let redusers = combineReducers({
	messages: messagesReduser,
	articles: articleReduser,
	news: newsReduser,
});

let store = createStore(redusers);

export default store;