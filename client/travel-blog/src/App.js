import './App.css';
import React, {useState} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Location from './components/Location';
import LocationCard from './components/LocationCard';
import LocationDetails from './components/LocationComments';



function App() {
  const history = useHistory()
  return (
    <div className="App">
      <Header />
    <main>
      <Switch>
        <Route exact path= "/locations/:id" component = {LocationDetails}/>
        <Route exapc path="/locations/" component= {Location} />




      </Switch>

    </main>
    </div>
  );
}

export default App;
