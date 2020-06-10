import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Account from "./components/Account";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/account" component={Account} />
        </Router>
      </div>
    );
  }
}
