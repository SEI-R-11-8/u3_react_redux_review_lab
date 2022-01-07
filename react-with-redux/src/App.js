import logo from './logo.svg';
import './App.css';
import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"




function App() {
  return (
    <div className="App">
   <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/posts/:postid" component={Posts} /> */}
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
