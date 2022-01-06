import './styles/App.css';
import Beaches from './components/Beaches';
import BeachForm from './components/BeachForm';
// import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h3>Rhode Island Beach Reviews</h3>
      <div className="Beaches">
        <Beaches />
        <BeachForm />
      </div>
    </div>
  );
};

export default App;
