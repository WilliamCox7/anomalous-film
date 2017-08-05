import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { setPost } from '../reducers/postReducer';
import './Results.scss';

class Results extends Component {

  constructor() {
    super();
    this.setPost = this.setPost.bind(this);
    this.setURL = this.setURL.bind(this);
  }

  setPost(i, title) {
    this.props.setPost(i);
    this.setURL(title);
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

    var results = this.props.posts.posts.map((post, i) => {
      if (i !== 0) {
        if (JSON.stringify(post).toLowerCase().indexOf(
          this.props.posts.search.toLowerCase()
        ) > -1) {
          return (
            <div onClick={() => {this.setPost(i, post.intro.movie_title)}} key={i}
              className="image-container">
              <img src={post.poster} />
              <p>{post.intro.movie_title}</p>
            </div>
          );
        }
      }
    });

    return (
      <div className="Results">
        {results}
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
  setPost: setPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
