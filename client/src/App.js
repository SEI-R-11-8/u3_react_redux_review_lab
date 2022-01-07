import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/NavBar';
import Locations from './components/locations';
import ListofLocations from './components/ListofLocations';
import LocationDetails from './components/LocationDetails';
import LocationForm from './components/LocationForm';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [locations, setLocations] = useState([]);
  const [newLocation, setNewLocation] = useState({
    name: '',
    description: '',
    comment: '',
    posts: ''
  });

  const postLocation = async () => {
    const res = await axios({
      url: 'http://localhost:3001/api/locations',
      method: 'post',
      data: newLocation
    });
    setLocations(res.data);
  };

  const addLocation = (e) => {
    e.preventDefault();
    postLocation();
    const currentlocations = locations.locations;
    const addLocation = {
      ...newLocation
    };
    currentlocations.push(addLocation);
    setLocations(currentlocations);
    setNewLocation({ name: '', description: '', comment: '', posts: '' });
  };

  const handleChange = (e) => {
    setNewLocation({ ...newLocation, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/locations"
            component={(props) => (
              <ListofLocations {...props} locations={locations} />
            )}
          />
          <Route
            path="/locations/new"
            render={(props) => (
              <LocationForm
                {...props}
                newLocation={newLocation}
                handleChange={handleChange}
                addLocation={addLocation}
              />
            )}
          />
          <Route
            path="/locations/:id"
            component={(props) => (
              <LocationDetails
                {...props}
                locations={locations}
                setLocations={setLocations}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
