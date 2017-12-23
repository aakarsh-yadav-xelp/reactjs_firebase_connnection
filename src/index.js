import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import user from "./reducers/user.reducer";

import registerServiceWorker from "./registerServiceWorker";

const allReducer = combineReducers({
  user
});
const store = createStore(allReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
