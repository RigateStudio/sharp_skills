import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { useLocalObservable, Observer } from "mobx-react";

export const StoreContext = createContext();
