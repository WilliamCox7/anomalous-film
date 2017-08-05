import React, { Component } from 'react';
import { connect } from 'react-redux';
import fb from '../src/fb.svg';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav-container">
          <p className="logo">anomalous film</p>
          <div className="action-container">
            <input type="text" placeholder="search..." />
            <div className="action-buttons">
              <span><i className="fa fa-home" aria-hidden="true"></i></span>
              <span><i className="fa fa-chevron-left" aria-hidden="true"></i></span>
              <span>next post <i className="fa fa-chevron-right" aria-hidden="true"></i></span>
            </div>
          </div>
          <div className="login"><img src={fb} /></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Nav);
