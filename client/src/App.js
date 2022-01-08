import './App.css';
import Posts from './components/Posts';
import Comments from './components/comments';
import { Route } from 'react-router-dom';
function App(props) {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Route
        exact
        path="/posts/:id"
        render={(props) => {
          return <Comments id={props.match.params.id} />;
        }}
      />
      <Route
        exact
        path="/"
        render={(props) => {
          return <Posts />;
        }}
      />
    </div>
  );
}

export default App;
