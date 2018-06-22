import { React, Component, YouTube } from '../../packages';
import { logoGray } from '../../assets';
import { callPlayer } from '../modules';
import './style.scss';

/**
  * Section is a component that breaks up the Post component
  *  into smaller components. Each sections has a title,
  *  youtube video, and paragraphs
  * @extends Component
 */

class Section extends Component {

  /**
   * constructor
   * @var {object} this.state.mute controls whether or not the
   *  video is muted
   * @method this.toggleMute bound to component's context
   */

  constructor() {
    super();
    this.state = {
      mute: true
    }
    this.toggleMute = this.toggleMute.bind(this);
  }

  /**
   * @method restart when the video ends, this is called and
   *  restarts the video
   * @param {object} e event object
   */

  restart(e) {
    e.target.playVideo();
  }

  /**
   * @method toggleMute toggles mute of the video by id (using
   *  youtubes api)
   * @param {string} youtubeId id used to access youtube video
   */

  toggleMute(youtubeId) {
    this.setState({mute: !this.state.mute}, () => this.state.mute
      ? callPlayer(youtubeId, "mute")
      : callPlayer(youtubeId, "unMute")
    );
  }

  /**
   * @method reveal when the video content has loaded, the iframe
   *  is revealed
   * @param {string} youtubeId id used to access youtube video
   * @param {boolean} first true if sections is the first section
   * @param {boolean} shown true if the section is visible to the user
   */

  reveal(youtubeId, first, shown) {
    if (youtubeId) {
      document.getElementById(youtubeId).style.opacity = 1;
      if (first && shown) {
        callPlayer(youtubeId, "playVideo");
      }
    }
  }

  /**
   * @method render renders a javascript/html hybrid
   * @return {jsx} what will be displayed from this component
   */

  render() {

    // builds the content of the section as html
    let section = this.props.section;
    let content = section.content.map((paragraph, i) => {
      return <p dangerouslySetInnerHTML={{__html: paragraph}} key={i}></p>
    });

    return (
      <div className="Section">
        <h1>{section.title}</h1>
        <div className="youtube-container">

          {/* Youtube Iframe */}
          <YouTube id={section.youtubeId} videoId={section.youtubeId}
            opts={{ playerVars: { mute: 1, rel: 0, controls: 0,
            showinfo: 0, cc_load_policy: 1 }}}
            onReady={() => this.reveal(
              section.youtubeId, this.props.first, this.props.shown
          )} onEnd={this.restart} />

          <img src={logoGray} />

          {/* this covers the entire youtube iframe. doesn't allow for
            user to click on video */}
          <div className="youtube-overlay"
            onClick={() => this.toggleMute(section.youtubeId)}>
          </div>

        </div>
        <div className="content-container">{content}</div>
      </div>
    );
  }
}

export default Section;
