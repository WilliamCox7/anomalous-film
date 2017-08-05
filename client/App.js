import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set } from './reducers/postReducer';
import Nav from './components/Nav';
import Home from './components/Home';
import './reset.scss';
import './main.scss';

const posts = require('./src/posts.js');

class App extends Component {

  componentDidMount() {
    this.props.set(posts);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

const mapDispatchToProps = {
  set: set
}

export default connect(null, mapDispatchToProps)(App);
