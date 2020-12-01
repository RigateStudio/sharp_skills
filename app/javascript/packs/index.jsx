// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Header from "../src/components/layouts/Header"
import Home from "../src/pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement("div"))
  );
});
