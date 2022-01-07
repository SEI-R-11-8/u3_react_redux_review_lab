import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import DestinationPage from './pages/DestinationPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/destinations/:id"
        component={(props) => <DestinationPage {...props} />}
      />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/destinations" component={Destinations} />
    </div>
  );
}

export default App;
