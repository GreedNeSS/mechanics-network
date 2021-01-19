import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const rerenderEntireTree = (state, addMessage, writeMessage) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addMessage={addMessage} writeMessage={writeMessage} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

export default rerenderEntireTree;