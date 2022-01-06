//import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CityDetail from "./components/CityDetail";

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CityDetail props={props} />} />
      </Routes>
    </div>
  );
}

export default App;
