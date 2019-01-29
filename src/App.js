import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Tutorial from "./components/Tutorial";
import MyAccount from "./components/MyAccount";
import Docs from "./components/Docs";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" id="app-element">
          <NavBar />
          <div className="main-info">
            <div className="border">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path="/myaccount" component={MyAccount} />
              <Route path="/docs" component={Docs} />
              <Route path="/contact" component={Contact} />
              <div className="padding-bottom" />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
