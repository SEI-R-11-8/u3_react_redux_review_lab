import './App.css';
import HomePage from './routes/HomePage'
import {Switch, Route } from 'react-router-dom'
import DetailsPage from './routes/DetailsPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:locationId" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
