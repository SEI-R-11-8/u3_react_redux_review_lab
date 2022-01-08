import './App.css';
import Posts from './components/Posts';
import Comments from './components/comments';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h3>Boulder Restaurants</h3>
      <Posts />
      <header className="App-header"></header>

      <Route
        exact
        path="/posts/:id"
        render={(props) => {
          return <Comments id={props.match.params.id} />;
        }}
      />
    </div>
  );
}

export default App;
