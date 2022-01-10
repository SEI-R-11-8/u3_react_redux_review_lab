import './App.css';
import Cities from './components/Cities';
import Reviews from './components/Reviews';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CityDetails from './components/CityDetails';
import PlusReview from './components/PlusReview';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <Cities {...props} />} />
        <Route
          path="/reviews/details/:cityId"
          render={(props) => <CityDetails {...props} />}
        />
        <Route path="/PlusReview" component={PlusReview} />
      </Switch>
    </div>
  );
}

export default App;
