// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import Header from "../src/components/Header/Index";
import Home from "../src/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalObservable, Observer } from "mobx-react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    currentUser: null,
    setCurrentUser: (response) => {
      store.currentUser = response;
    }
  }));

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const Test = () => {
  const store = useContext(StoreContext);
  console.log(store.currentUser?.first_name)
return (<Observer>{() => <h1>Hello {store.currentUser?.first_name }</h1>}</Observer>)
};

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        <Test></Test>
        <Switch>
          <Route path="/" exact>
            <Home />
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
