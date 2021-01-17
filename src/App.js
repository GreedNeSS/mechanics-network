import './App.css';
import { Header } from './components/Header/Header';
import Content from './components/Content/Content';
// import Footer from './components/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Sidebar />
				<Content state={props.state} />
			</div>
		</BrowserRouter>
	);
}

export default App;
