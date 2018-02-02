import { React, ReactDOM, Router, Route, hashHistory, thunk, Provider, createStore, applyMiddleware, compose } from './packages';
import { Home, About, Posts } from './components';
import root from './root';
import App from './App';

let store = createStore(
  root, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/post" component={Posts} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);
