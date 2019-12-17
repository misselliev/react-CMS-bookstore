import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/books";
import { Provider } from "react-redux";

const initState = [
  {
    id: Math.random,
    title: "Woof stories",
    author: "Dulce",
    category: "Action"
  },
  {
    id: Math.random,
    title: "Kitchen woofs",
    author: "Dulce",
    category: "Learning"
  },
  {
    id: Math.random,
    title: "Be the Woof",
    author: "Dulce",
    category: "Biography"
  }
];
const store = createStore(rootReducer, initState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
