import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLen, prev, next } from '../reducers/postReducer';
import { hashHistory } from 'react-router';
import YouTube from 'react-youtube';
import Results from './Results';
import $ from 'jquery';
import './Home.scss';

const posts = require('../src/posts.js');

class Home extends Component {

  constructor() {
    super();
    this.state = {
      ids: {},
      curDown: false,
      x: undefined,
      y: undefined
    };
    this.ready = this.ready.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.fadeOverlay = this.fadeOverlay.bind(this);
    this.startGesture = this.startGesture.bind(this);
    this.endGesture = this.endGesture.bind(this);
    this.dragOver = this.dragOver.bind(this);
    this.setURL = this.setURL.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.setStateVid = this.setStateVid.bind(this);
  }

  componentDidMount() {
    this.props.setLen(posts.length);
    this.setStateVid();
    var topScreen = 0, botScreen = screen.height - 300;
    if (document.body.clientWidth < 536) {
      botScreen = screen.height - 200;
    }
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

  setStateVid() {
    var newState = {ids: {}, curDown: false, x: undefined, y: undefined};
    var index = 0;
    if (localStorage["index"]) {
      index = localStorage.getItem("index");
    }
    posts[index].body.forEach((item, i) => {
      if (item.youtubeId !== undefined) {
        newState.ids[item.youtubeId] = {
          duration: 0, paused: false, mute: true
        };
      }
    });
    if (posts[index].youtubeId) {
      newState.ids[posts[index].youtubeId] = {
        duration: 0, paused: false, mute: true
      };
    }
    this.setState(newState);
  }

  ready(e, start, length, id) {
    this.setStateVid();
    new Promise((resolve, reject) => {
      var promInterval = setInterval(() => {
        if (this.state.ids[id]) {
          clearInterval(promInterval);
          resolve(this.state.ids[id]);
        }
      }, 100);
    }).then((vid) => {
      var newState = Object.assign({}, this.state);
      e.target.seekTo(start);
      e.target.playVideo();
      var interval = setInterval(() => {
        if (!newState.ids[id].paused) {
          newState.ids[id].duration += 1000;
          if (newState.ids[id].duration === length) {
            newState.ids[id].duration = 0;
            clearInterval(interval);
            this.ready(e, start, length, id);
          }
        }
      }, 1000);
    });
  }

  play(id) {
    var newState = Object.assign({}, this.state);
    newState.ids[id].paused = false;
    this.setState(newState);
    document.getElementById(id).parentElement
    .parentElement.children[1].style.opacity = 0;
  }

  pause(id) {
    var newState = Object.assign({}, this.state);
    newState.ids[id].paused = true;
    this.setState(newState);
    document.getElementById(id).parentElement
    .parentElement.children[1].style.opacity = 0.7;
  }

  fadeOverlay(e, id) {
    var fadeInterval = setInterval(() => {
      if (e.target.getCurrentTime() > 0) {
        document.getElementById(id).parentElement
        .parentElement.children[1].style.opacity = 0;
        clearInterval(fadeInterval);
      }
    }, 100);
  }

  dragOver(e) {
    if (this.state.curDown) {
      if (this.state.y+50 >= e.touches[0].clientY) {
        if (this.state.x-50 > e.touches[0].clientX) {
          if (this.props.posts.index < this.props.posts.length-1) {
            this.props.next();
            this.endGesture();
            this.setURL(posts[this.props.posts.index+1].intro.movie_title);
            window.scroll(0, 0);
          }
        } else if (this.state.x+50 < e.touches[0].clientX) {
          if (this.props.posts.index > 0) {
            this.props.prev();
            this.endGesture();
            this.setURL(posts[this.props.posts.index-1].intro.movie_title);
            window.scroll(0, 0);
          }
        }
      }
    }
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

  startGesture(e) {
    this.setState({
      ids: this.state.ids,
      curDown: true,
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  }

  endGesture(e) {
    this.setState({
      ids: this.state.ids,
      curDown: false,
      x: undefined,
      y: undefined
    });
  }

  toggleMute(e, id) {
    var newState = Object.assign({}, this.state);
    newState.ids[id].mute = !newState.ids[id].mute;
    this.setState(newState);
    if (document.getElementById(id).contentWindow) {
      if (newState.ids[id].mute) {
        document.getElementById(id).contentWindow.postMessage(
          '{"event":"command","func":"' + 'mute' + '","args":""}', '*'
        );
      } else {
        document.getElementById(id).contentWindow.postMessage(
          '{"event":"command","func":"' + 'unMute' + '","args":""}', '*'
        );
      }
    }
  }

  render() {
    var post;
    if (posts.length > 0) {
      var bodyContent = posts[this.props.posts.index].body.map((item, i) => {
        return (
          <div key={i} className="body-item">
            <div className="item-header">
              <span>{item.title}</span>
              <span>{item.minute_mark}</span>
            </div>
            {item.youtubeId !== undefined ? (
              <div className="youtube-container" ref={item.youtubeId}>
                <YouTube id={item.youtubeId} videoId={item.youtubeId} onReady={(e) => {
                  this.ready(e, item.start, item.length, item.youtubeId);
                  this.fadeOverlay(e, item.youtubeId);
                }} onPause={() => { this.pause(item.youtubeId); }}
                  onPlay={() => { this.play(item.youtubeId); }}
                  opts={{ playerVars: {
                    mute: 1, rel: 0, controls: 0, showinfo: 0
                }}} />
                <span className="overlay">
                  <i className="fa fa-film" aria-hidden="true"></i>
                </span>
                {this.state.ids[item.youtubeId] ? (
                  <div className="mute-buttons" onClick={(e) => {this.toggleMute(e, item.youtubeId)}}>
                    {this.state.ids[item.youtubeId].mute ? (
                      <i className="fa fa-volume-off" aria-hidden="true"></i>
                    ) : (
                      <i className="fa fa-volume-up" aria-hidden="true"></i>
                    )}
                  </div>
                ) : null}
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
      post = (<div className="post-container" onTouchStart={this.startGesture}
        onTouchMove={this.dragOver} onTouchEnd={this.endGesture}>
        <div className="intro">
          <div className="intro-header">
            <div className="left-side">
              <h1>{posts[this.props.posts.index].intro.post_title}</h1>
              <p className="by-text">by anomalous film</p>
            </div>
            <div className="right-side">
              {/* <p className="movie-title">
                {posts[this.props.posts.index].intro.movie_title}
              </p> */}
            </div>
          </div>
          <div className="content">
            {posts[this.props.posts.index].intro.content}
          </div>
        </div>
        {bodyContent}
        {posts[this.props.posts.index].previd ? (
          <div className="blank-para">
            <p className="content">{posts[this.props.posts.index].previd}</p>
            <div className="youtube-container" ref={posts[this.props.posts.index].youtubeId}>
              <YouTube id={posts[this.props.posts.index].youtubeId} videoId={posts[this.props.posts.index].youtubeId} onReady={(e) => {
                this.ready(e, posts[this.props.posts.index].start, posts[this.props.posts.index].length, posts[this.props.posts.index].youtubeId);
                this.fadeOverlay(e, posts[this.props.posts.index].youtubeId);
              }} onPause={() => { this.pause(posts[this.props.posts.index].youtubeId); }}
                onPlay={() => { this.play(posts[this.props.posts.index].youtubeId); }}
                opts={{ playerVars: {
                  mute: 1, rel: 0, controls: 0, showinfo: 0
              }}} />
              <span className="overlay">
                <i className="fa fa-film" aria-hidden="true"></i>
              </span>
              {this.state.ids[posts[this.props.posts.index].youtubeId] ? (
                <div className="mute-buttons" onClick={(e) => {this.toggleMute(e, posts[this.props.posts.index].youtubeId)}}>
                  {this.state.ids[posts[this.props.posts.index].youtubeId].mute ? (
                    <i className="fa fa-volume-off" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-volume-up" aria-hidden="true"></i>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="blank-para">
          <p className="content">{posts[this.props.posts.index].conclusion}</p>
        </div>
        <div className="fb-comments" data-href={posts[this.props.posts.index].fb}
        data-width={(() => {
          var width = 474;
          var x = document.body.clientWidth;
          if (x < 536) { width = x - 44; }
          return width;
        })()} data-numposts="5"></div>
      </div>);
    }
    return (
      <div className="Home">
        {this.props.posts.search ? (
          <Results />
        ): (post)}
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
  setLen: setLen,
  next: next,
  prev: prev
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
