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
            this.play(prop);
          }
        } else {
          if (document.getElementById(prop).contentWindow) {
            this.pause(prop);
          }
        }
      }
    });
  }

  setStateVid() {
    var newState = {ids: {}, curDown: false, x: undefined, y: undefined};
    posts.forEach((post) => {
      post.body.forEach((item) => {
        if (item.youtubeId !== undefined) {
          newState.ids[item.youtubeId] = {mute: true};
        }
      });
    });
    this.setState(newState);
  }

  play(id) {
    document.getElementById(id).contentWindow.postMessage(
      '{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'
    );
    document.getElementById(id).parentElement
    .parentElement.children[1].style.opacity = 0;
    document.getElementById(id).parentElement
    .parentElement.children[2].style.display = 'flex';
  }

  pause(id) {
    document.getElementById(id).contentWindow.postMessage(
      '{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'
    );
    document.getElementById(id).parentElement
    .parentElement.children[1].style.opacity = 0.7;
    document.getElementById(id).parentElement
    .parentElement.children[2].style.display = 'none';
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
            this.setURL(posts[this.props.posts.index+1].intro.post_title);
            window.scroll(0, 0);
          }
        } else if (this.state.x+50 < e.touches[0].clientX) {
          if (this.props.posts.index > 0) {
            this.props.prev();
            this.endGesture();
            this.setURL(posts[this.props.posts.index-1].intro.post_title);
            window.scroll(0, 0);
          }
        }
      }
    }
  }

  setURL(title) {
    var hash;
    if (title.indexOf("/") > -1) { hash = "/"; } else {
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
                <YouTube id={item.youtubeId} videoId={item.youtubeId}
                  onPause={() => { this.pause(item.youtubeId); }}
                  onPlay={() => { this.play(item.youtubeId); }}
                  onEnd={() => { this.play(item.youtubeId); }}
                  opts={{ playerVars: { mute: 1, rel: 0, controls: 0,
                    showinfo: 0, autoplay: 1
                }}} />
                <span className="overlay">
                  <i className="fa fa-film" aria-hidden="true"></i>
                </span>
                {this.state.ids[item.youtubeId] ? (
                  <div className="mute-buttons">
                    {this.state.ids[item.youtubeId].mute ? (
                      <i className="fa fa-volume-off" aria-hidden="true" onClick={
                        (e) => {this.toggleMute(e, item.youtubeId)}}></i>
                    ) : (
                      <i className="fa fa-volume-up" aria-hidden="true" onClick={
                        (e) => {this.toggleMute(e, item.youtubeId)}}></i>
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
              <h1>
                {posts[this.props.posts.index].intro.post_title}
                {" • "}
                {posts[this.props.posts.index].intro.movie_title}
              </h1>
              <p className="by-text">by anomalous film</p>
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
            <div className="youtube-container">
              <YouTube id={posts[this.props.posts.index].youtubeId} videoId={posts[this.props.posts.index].youtubeId}
                onPause={() => { this.pause(posts[this.props.posts.index].youtubeId); }}
                onPlay={() => { this.play(posts[this.props.posts.index].youtubeId); }}
                opts={{ playerVars: { mute: 0, rel: 0, controls: 1,
                  showinfo: 0
              }}} />
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
