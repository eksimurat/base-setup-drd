import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/index.js";
import { Provider } from "react-redux";
import User from "./components/User"
import './App.css';

// Store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <User/>
      </div>
      </Provider>
    );
  }
}



export default App;
