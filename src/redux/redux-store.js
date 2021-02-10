import { applyMiddleware, combineReducers, createStore } from "redux";
import articleReducer from "./article-reducer";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


let redusers = combineReducers({
	messages: messagesReducer,
	articles: articleReducer,
	news: newsReducer,
	users: usersReducer,
	profile: profileReducer,
	auth: authReducer,
	form: formReducer,
});

let store = createStore(redusers, applyMiddleware(thunkMiddleWare));

export default store;

window.store = store;