import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './components/Destinations';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={(props) => <Home {...props} />} />
			<Route
				path='/destinations'
				component={(props) => <Destinations {...props} />}
			/>
		</div>
	);
}

export default App;
