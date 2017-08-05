/* PACKAGES */
import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

/* COMPONENTS */
import App from './App';
import Home from './components/Home';

/* STORE - REDUX */
let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

/* ROUTES */
ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
