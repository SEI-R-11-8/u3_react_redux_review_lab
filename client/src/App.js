import './styles/App.css';
import Beaches from './components/Beaches';
// import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h3>R.I. Beach Reviews</h3>
      <div className="Beaches">
        <Beaches />
      </div>
    </div>
  );
}

export default App;
