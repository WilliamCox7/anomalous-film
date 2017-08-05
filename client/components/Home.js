import React, { Component } from 'react';
import YouTube from 'react-youtube';
import $ from 'jquery';
import './Home.scss';

const posts = require('../src/posts.js');

class Home extends Component {

  constructor() {
    super();
    this.state = {};
    this.ready = this.ready.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    var newState = {};
    posts[0].body.forEach((item, i) => {
      if (item.youtubeId !== undefined) {
        newState[item.youtubeId] = {
          duration: 0, paused: false
        };
      }
    });
    this.setState(newState);
    var topScreen = 0, botScreen = screen.height - 300;
    document.addEventListener('scroll', () => {
      for (var prop in this.refs) {
        var elementTop = this.refs[prop].getBoundingClientRect().top;
        var elementBot = this.refs[prop].getBoundingClientRect().bottom;
        if (elementTop < botScreen && elementTop >= topScreen &&
        elementBot <= botScreen && elementBot > topScreen) {
          if (document.getElementById(prop).contentWindow) {
            document.getElementById(prop).contentWindow.postMessage(
              '{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'
            );
          }
        } else {
          if (document.getElementById(prop).contentWindow) {
            document.getElementById(prop).contentWindow.postMessage(
              '{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'
            );
          }
        }
      }
    });
  }

  ready(e, start, length, id) {
    var newState = Object.assign({}, this.state);
    e.target.seekTo(start);
    e.target.playVideo();
    var interval = setInterval(() => {
      if (!this.state[id].paused) {
        newState[id].duration += 1000;
        if (newState[id].duration === length) {
          newState[id].duration = 0;
          clearInterval(interval);
          this.ready(e, start, length, id);
        }
      }
    }, 1000);
  }

  play(id) {
    var newState = Object.assign({}, this.state);
    newState[id].paused = false;
    this.setState(newState);
  }

  pause(id) {
    var newState = Object.assign({}, this.state);
    newState[id].paused = true;
    this.setState(newState);
  }

  render() {
    var post;
    if (posts.length > 0) {
      var bodyContent = posts[0].body.map((item, i) => {
        return (
          <div key={i} className="body-item">
            <div className="item-header">
              <span>{item.title}</span>
              <span>{item.minute_mark}</span>
            </div>
            {item.youtubeId !== undefined ? (
              <div ref={item.youtubeId}>
                <YouTube id={item.youtubeId} videoId={item.youtubeId} onReady={(e) => {
                  this.ready(e, item.start, item.length, item.youtubeId)}}
                  onPause={() => { this.pause(item.youtubeId); }}
                  onPlay={() => { this.play(item.youtubeId); }}
                  opts={{ playerVars: {
                    mute: 1, rel: 0, controls: 0, showinfo: 0
                }}} />
              </div>
            ) : (
              <img src={item.image} />
            )}
            <div className="content">
              {item.content}
            </div>
          </div>
        );
      });
      post = (<div className="post-container">
        <div className="intro">
          <div className="intro-header">
            <div className="left-side">
              <h1>{posts[0].intro.post_title}</h1>
              <p className="by-text">by anomalous film</p>
            </div>
            <div className="right-side">
              <p className="movie-title">
                {posts[0].intro.movie_title}
              </p>
            </div>
          </div>
          <div className="content">
            {posts[0].intro.content}
          </div>
        </div>
        {bodyContent}
        {posts[0].previd ? (
          <div className="blank-para">
            <p className="content">{posts[0].previd}</p>
            <iframe src={posts[0].scene} allowFullScreen></iframe>
          </div>
        ) : null}
        <div className="blank-para">
          <p className="content">{posts[0].conclusion}</p>
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

export default Home;
