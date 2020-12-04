// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import StoreProvider from "./src/store/index.jsx";
import ReactDOM from "react-dom";
import Home from "./src/pages/Home";
import Register from "./src/pages/Register";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import TrainingSessions from "./src/pages/TrainingSessions";
import Header from "./src/components/Header"
import Login from "./src/pages/Login"
import LandingPage from "./src/pages/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const App = () => {
  return (
    <StoreProvider>
          <Router>
          <Header/>
            <Switch>
              <Route path="/landing-page">
                <LandingPage />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/create-course">
                <Home />
              </Route>
              <Route path="/trainings">
                <TrainingSessions />
              </Route>
            </Switch>
            <Footer/>
          </Router>
    </StoreProvider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
