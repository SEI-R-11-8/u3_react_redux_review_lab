import { Route } from 'react-router-dom';
import LocationsList from './components/LocationsList';
import LocationCard from './components/LocationCard';
import Location from './components/Location';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>World Traveler</h1>
      <div className="flex-row">
        <div className="left">
          <LocationsList />
          <button>Add Location</button>
        </div>
        <div className="right">
          <Route path="/locations/:id" component={LocationCard} />
        </div>
      </div>
    </div>
  );
}

export default App;
