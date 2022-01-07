import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Details from './routes/Details';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:locationId" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
