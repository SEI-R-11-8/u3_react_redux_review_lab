import './app.css'
import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import PostsDetails from './components/PostsDetails'

function App () {
  return (
    <div className="App">
      <Link to="/" style={{ textDecoration: "none" }}><h1>Home</h1></Link>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={(props) => <PostsDetails {...props} />}></Route>
    </div>
  );
}

export default App;
