import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import ParallaxApp from "./components/ParallaxApp";
import MenuBar from "./components/MenuBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <MenuBar />
          <Route path="/" component={ParallaxApp} />
          <Route
            path="/github"
            component={() => {
              window.location.href = "https://github.com/eduardolanda";
              return null;
            }}
          />
          <Route
            path="/linkedin"
            component={() => {
              window.location.href = "https://www.linkedin.com/in/eduardolanda";
              return null;
            }}
          />
        </Router>
      </div>
    );
  }
}
