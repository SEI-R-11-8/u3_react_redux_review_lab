import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LocationsList from './components/LocationsList';
import LocationCard from './components/LocationCard';
import LocationForm from './components/LocationForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>World Traveler</h1>
      <div className="flex-row">
        <div className="left">
          <LocationsList />
          <Link to="/new-location">
            <button>Add Location</button>
          </Link>
        </div>
        <div className="right">
          <Switch>
            <Route path="/locations/:id" component={LocationCard} />
            <Route path="/new-location" component={LocationForm} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
