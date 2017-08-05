import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { home, prev, next, search, setPost } from '../reducers/postReducer';
import fb from '../src/fb.svg';
import './Nav.scss';

class Nav extends Component {

  constructor() {
    super();
    this.search = this.search.bind(this);
    this.home = this.home.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.setURL = this.setURL.bind(this);
  }

  componentDidMount() {
    var path = localStorage.getItem("path");
    hashHistory.replace(path);
    var index = localStorage.getItem("index");
    if (path && index) {
      this.props.setPost(Number(index));
      this.setURL(path);
    } else {
      this.props.setPost(0);
      this.setURL("");
    }
  }

  search(e) {
    this.props.search(e.target.value);
    if (e.target.value === '') {
      var path = localStorage.getItem("path");
      var title = path.split("/")[1].split("-").join(" ");
      this.setURL(title);
    } else {
      hashHistory.replace('/search');
    }
  }

  home() {
    this.props.home();
    this.setURL("");
    window.scroll(0, 0);
  }

  prev() {
    this.props.prev();
    this.setURL(this.props.posts.posts[this.props.posts.index-1].intro.movie_title);
    window.scroll(0, 0);
  }

  next() {
    this.props.next();
    this.setURL(this.props.posts.posts[this.props.posts.index+1].intro.movie_title);
    window.scroll(0, 0);
  }

  setURL(title) {
    var hash;
    if (title.indexOf("/") > -1) {
      hash = "/";
    } else {
      hash = "/" + title.split(" ").join("-").toLowerCase();
    }
    var curLoc = hashHistory.getCurrentLocation().pathname;
    if (hash !== curLoc) {
      hashHistory.replace(hash);
      var hashInterval = setInterval(() => {
        if (hashHistory.getCurrentLocation().pathname === hash) {
          FB.XFBML.parse();
          clearInterval(hashInterval);
        }
      }, 100);
      localStorage.setItem("path", hash);
    }
  }

  render() {
    return (
      <div className="Nav">
        <div className="nav-container">
          <p className="logo">anomalous film</p>
          <div className="action-container">
            <input onChange={this.search} type="text"
              placeholder="search..." value={this.props.posts.search} />
            {this.props.posts.search ? null : (
              <div className="action-buttons">
                {this.props.posts.index > 0 ? (
                  <span onClick={this.home}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </span>
                ) : null}
                {this.props.posts.index !== 0 ? (
                  <span onClick={this.prev}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    {this.props.posts.length-1 > this.props.posts.index ? (
                      null) : (' prev post')}
                  </span>
                ) : null}
                {this.props.posts.length-1 > this.props.posts.index ? (
                  <span onClick={this.next}>
                    next post <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </span>
                ) : null}
              </div>
            )}
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
  next: next,
  search: search,
  setPost: setPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
