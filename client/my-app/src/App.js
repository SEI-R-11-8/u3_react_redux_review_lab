import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-rputer-dom';
import HomePage from './routes/HomePage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
