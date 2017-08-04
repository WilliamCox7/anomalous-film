import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.scss';

class Home extends Component {
  render() {
    var post;
    if (this.props.reducer.posts.length > 0) {
      var bodyContent = this.props.reducer.posts[0].body.map((item, i) => {
        return (
          <div key={i} className="body-item">
            <div className="item-header">
              <span>{item.title}</span>
              <span>{item.minute_mark}</span>
            </div>
            <img src={item.image} />
            <div className="content">
              {item.content}
            </div>
          </div>
        );
      });
      post = (<div>
          <img className="poster" src={this.props.reducer.posts[0].poster} />
          <div className="intro">
            <div className="intro-header">
              <div className="left-side">
                <h1>{this.props.reducer.posts[0].intro.post_title}</h1>
                <p className="by-text">by anomalous film</p>
              </div>
              <div className="right-side">
                <p className="movie-title">
                  {this.props.reducer.posts[0].intro.movie_title}
                </p>
              </div>
            </div>
            <div className="content">
              {this.props.reducer.posts[0].intro.content}
            </div>
          </div>
          {bodyContent}
          <div className="blank-para">
            <p className="content">{this.props.reducer.posts[0].previd}</p>
            <iframe src={this.props.reducer.posts[0].scene} allowFullScreen></iframe>
          </div>
          <div className="blank-para">
            <p className="content">{this.props.reducer.posts[0].conclusion}</p>
          </div>
      </div>);
    }
    return (
      <div className="Home">
        {post}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reducer: state.posts
  }
}

export default connect(mapStateToProps)(Home);
