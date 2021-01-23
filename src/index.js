import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import { Provider } from './StoreContext';


const rerenderEntireTree = (store) => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App store={store} />
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

store.subscribe(() => rerenderEntireTree(store));

rerenderEntireTree(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
