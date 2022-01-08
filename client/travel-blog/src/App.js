import './App.css';
import React, {useState} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './pages/Header';
import Location from './pages/Location';
import LocationCard from './components/LocationCard';
import LocationDetails from './pages/LocationComments';



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
