import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderContainer from './components/Header/HeaderContainer';
import store from "./redux/redux-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<div className="App">
					<HeaderContainer />
					<Sidebar />
					<Content />
				</div>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
