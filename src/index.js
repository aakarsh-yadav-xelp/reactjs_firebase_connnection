import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import user from "./reducers/user.reducer";
import agents from "./reducers/agents.reducer";

import registerServiceWorker from "./registerServiceWorker";

const allReducer = combineReducers({
  user,
  agents
});
const store = createStore(allReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
