import { React, Component } from '../../packages';
import { Section } from '../';
import { callPlayer } from '../modules';
import './style.scss';

class Post extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    var topScreen = 60, botScreen = screen.height - 180;
    let sections = this.props.post.sections;
    document.addEventListener('scroll', () => {
      sections.forEach((section) => {
        let iframe = document.getElementById(section.youtubeId);
        let iframeTop = iframe.getBoundingClientRect().top;
        let iframeBot = iframe.getBoundingClientRect().bottom;
        if (iframeTop < botScreen && iframeTop > topScreen
         && iframeBot <= botScreen && iframeBot > topScreen) {
          callPlayer(section.youtubeId, "playVideo");
        } else {
          callPlayer(section.youtubeId, "pauseVideo");
        }
      });
    });
  }

  render() {

    let post = this.props.post;
    let sections = buildSections(post.sections);

    return (
      <div className="Post flex fd-c">
        <div className="header flex jc-sb">
          <h1>{post.work}</h1>
          <h1>{post.title}</h1>
        </div>
        <div className="content">
          {sections}
        </div>
      </div>
    );
  }
}

export default Post;

function buildSections(sections) {
  return sections.map((section, i) => {
    return <Section section={section} first={i === 0} key={i} />
  });
}
