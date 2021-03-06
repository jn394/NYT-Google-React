import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="page">
        <Navbar />
        <Jumbotron />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
