import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../assets/css/main.css";
import Navbar from "./Navbar";
import Home from "./Home";
import SavedBooks from "./SavedBooks";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/saved-books" component={SavedBooks} />
        </Router>
      </div>
    );
  }
}
