import logo from './logo.svg';
import './App.css';
import Destinations from './components/Destinations';
import DestinationDetails from './components/DestinationDetails';
import Comments from './components/Comments';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Destinations</h1>
      <Destinations />
      <Route path='/posts/:id' component={DestinationDetails} />
      {/* <Route path='/comments' component={Comments} /> */}
    </div>
  );
}

export default App;
