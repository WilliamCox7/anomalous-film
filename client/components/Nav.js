import React, { Component } from 'react';
import { connect } from 'react-redux';
import { home, prev, next } from '../reducers/postReducer';
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
              {this.props.posts.index > 1 ? (
                <span onClick={this.props.home}>
                  <i className="fa fa-home" aria-hidden="true"></i>
                </span>
              ) : null}
              {this.props.posts.index !== 0 ? (
                <span onClick={this.props.prev}>
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  {this.props.posts.length-1 > this.props.posts.index ? (
                    null) : (' prev post')}
                </span>
              ) : null}
              {this.props.posts.length-1 > this.props.posts.index ? (
                <span onClick={this.props.next}>
                  next post <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </span>
              ) : null}
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

const mapDispatchToProps = {
  home: home,
  prev: prev,
  next: next
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
