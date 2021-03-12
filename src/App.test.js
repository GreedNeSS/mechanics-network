import ReactDOM from 'react-dom';
import App from './App';

test('renders and unmount App component', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
