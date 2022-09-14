import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/ReduxStore";
function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
