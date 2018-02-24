import { React, Component, YouTube } from '../../packages';
import { logoGray } from '../../assets';
import { callPlayer } from '../modules';
import './style.scss';

// represents a "portion" of the post component
class Section extends Component {

  constructor() {
    super();
    this.state = {
      mute: true // controls whether or not the video is muted
    }
    this.toggleMute = this.toggleMute.bind(this);
  }

  // when the video ends, this is called and restarts the video
  restart(e) {
    e.target.playVideo();
  }

  // toggles mute of the video by id (using youtubes api)
  toggleMute(youtubeId) {
    this.setState({mute: !this.state.mute}, () => this.state.mute
      ? callPlayer(youtubeId, "mute");
      : callPlayer(youtubeId, "unMute");
    );
  }

  render() {

    // builds the content of the section as html
    let content = this.props.section.content.map((paragraph, i) => {
      return <p dangerouslySetInnerHTML={{__html: paragraph}} key={i}></p>
    });

    return (
      <div className="Section">
        <h1>{section.title}</h1>
        <div className="youtube-container">
          <YouTube id={section.youtubeId} videoId={section.youtubeId}
            opts={{ playerVars: { mute: 1, rel: 0, controls: 0,
            showinfo: 0, cc_load_policy: 1 }}}
            onReady={() => reveal(section.youtubeId, this.props.first, this.props.shown)}
            onEnd={this.restart} />
          <img src={logoGray} />
          <div className="youtube-overlay" onClick={() => this.toggleMute(section.youtubeId)}></div>
        </div>
        <div className="content-container">{content}</div>
      </div>
    );
  }
}

export default Section;

// when the video content has loaded, the iframe is revealed
function reveal(youtubeId, first, shown) {
  if (youtubeId) {
    document.getElementById(youtubeId).style.opacity = 1;

    // if the video is the currently displayed video, play the video automatically
    if (first && shown) {
      callPlayer(youtubeId, "playVideo");
    }
    
  }
}
