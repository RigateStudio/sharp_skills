import React, { createContext, useContext } from "react";
import { useLocalObservable, Observer } from "mobx-react";
import Cookies from "js-cookie";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  console.log("StoreProvider({ children }")
  const store = useLocalObservable(() => ({
    currentUser: Cookies.get("currentUser") ? JSON.parse(Cookies.get("currentUser")) : null,
    setCurrentUser: (response) => {
      store.currentUser = response;
    },
  }));
///
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

/*const Test = () => {
  const store = useContext(StoreContexgt);
  console.log(store.currentUser?.first_name);
  return <Observer>{() => <h1>Hello {store.currentUser?.first_name}</h1>}</Observer>;
};*/

export default StoreProvider;
