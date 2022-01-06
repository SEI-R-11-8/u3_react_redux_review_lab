import './App.css';
import Posts from './components/Posts';
import Comments from './components/comments';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h3>Beaches</h3>
      <Posts />
      <header className="App-header"></header>

      <Route path="/posts/:id">
        <Comments />
      </Route>
    </div>
  );
}

export default App;
