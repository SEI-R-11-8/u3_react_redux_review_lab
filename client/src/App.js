import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Post from './routes/Post';
import ReviewForm from './routes/ReviewForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/post/:postId'} component={Post} />
        <Route path={'/reviewform/:postId'} component={ReviewForm} />
      </Switch>
    </div>
  );
}

export default App;