import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import DetailsPage from './routes/DetailsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:locationId" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
