import { React, Component, YouTube } from '../../packages';
import { logoGray } from '../../assets';
import { callPlayer } from '../modules';
import './style.scss';

class Section extends Component {

  constructor() {
    super();
    this.state = {
      mute: true
    }
    this.toggleMute = this.toggleMute.bind(this);
  }

  restart(e) {
    e.target.playVideo();
  }

  toggleMute(youtubeId) {
    this.setState({mute: !this.state.mute}, () => {
      if (this.state.mute) {
        callPlayer(youtubeId, "mute");
      } else {
        callPlayer(youtubeId, "unMute");
      }
    });
  }

  render() {

    let section = this.props.section;
    let content = buildContent(section.content);

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

function buildContent(content) {
  return content.map((paragraph, i) => {
    return <p dangerouslySetInnerHTML={{__html: paragraph}} key={i}></p>
  });
}

function reveal(youtubeId, first, shown) {
  if (youtubeId) {
    document.getElementById(youtubeId).style.opacity = 1;
    if (first && shown) {
      callPlayer(youtubeId, "playVideo");
    }
  }
}
