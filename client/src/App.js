import './App.css';
import { Route, Switch } from 'react-router-dom';
import Locations from './components/Locations';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <h2>Redux Thunk Practice</h2>
      <h2>Travel Blog Site </h2>
      <Switch>
        <Route exact path="/" component={Locations} />
        <Route path="/locations/:id" component={Location} />
      </Switch>
    </div>
  );
}

export default App;
