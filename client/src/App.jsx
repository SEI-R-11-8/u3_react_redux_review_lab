import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Destinations from './components/Destinations';
import NavBar from './components/NavBar';
import Details from './components/Details';

function App() {
  return (
    <div>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/destinations/:id' component={(props) => (<Details {...props}/>)}/>
          <Route path='/destinations' component={(props) => (<Destinations {...props} />)} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
