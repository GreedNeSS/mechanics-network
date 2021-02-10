import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {
	return (
		<div className="App">
			<HeaderContainer />
			<Sidebar />
			<Content />
		</div>
	);
}

export default App;
