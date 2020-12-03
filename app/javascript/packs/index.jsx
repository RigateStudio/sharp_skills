// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import StoreProvider from "./src/store";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Home from "./src/pages/Home";
import Register from "./src/pages/Register"
import LandingPage from "./src/pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Observer } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const App = () => {
  return (
    <Observer>
      {() => (
        <StoreProvider>
          <Router>
            <Header />
            <Switch>
              <Route path="/landing-page">
                <LandingPage />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/create-course"></Route>
            </Switch>
          </Router>
        </StoreProvider>
      )}
    </Observer>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
