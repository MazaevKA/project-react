import logo from './logo.svg';
import './App.css';

export const App = () => { // декларативный
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link" // императивный
					href="https://reactjs.org" // императивный
					target="_blank" // императивный
					rel="noopener noreferrer" // императивный
				>
					Learn React
				</a>
        {new Date().toLocaleString()}
			</header>
		</div> // декларативный
	);
};
