import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPost } from '../reducers/postReducer';
import './Results.scss';

class Results extends Component {
  render() {

    var results = this.props.posts.posts.map((post, i) => {
      if (i !== 0) {
        if (JSON.stringify(post).toLowerCase().indexOf(
          this.props.posts.search.toLowerCase()
        ) > -1) {
          return (
            <div onClick={() => {this.props.setPost(i)}} key={i}
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
