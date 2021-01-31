import './App.css';
import { Header } from './components/Header/Header';
import Content from './components/Content/Content';
// import Footer from './components/Footer';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
	return (
		<div className="App">
			<Header />
			<Sidebar />
			<Content />
		</div>
	);
}

export default App;
