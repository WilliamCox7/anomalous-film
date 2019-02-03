import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home';
import Best from './pages/Best';
import './reset.scss';
import './main.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/best-picture" component={Best} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
