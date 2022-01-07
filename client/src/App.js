import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './components/Destinations';
import Reviews from './components/Reviews';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={(props) => <Home {...props} />} />
				<Route
					path='/destinations'
					component={(props) => <Destinations {...props} />}
				/>
				<Route
					path='/destinations/:destinations_id'
					component={(props) => <Reviews {...props} />}
				/>
			</Switch>
		</div>
	);
}

export default App;
