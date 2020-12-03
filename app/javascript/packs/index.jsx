// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import StoreProvider from "./src/store";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Home from "./src/pages/Home";
import LandingPage from "./src/pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalObservable, Observer } from "mobx-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/create-course"></Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
