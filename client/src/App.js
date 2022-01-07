import './App.css';
import PostPage from './components/PostPage';
import { Route, Switch } from 'react-router'
import PostDetails from './components/PostDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path="/" render={(props) =>
          <PostPage {...props}/>}>
        </Route>

        <Route path="/:id" render={(props) => 
          <PostDetails {...props}/>
        }>
        </Route>

      </Switch>
      
    </div>
  )
}

export default App;
