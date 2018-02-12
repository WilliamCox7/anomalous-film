import { React, Component, debounce } from '../../packages';
import { Section } from '../';
import { manipulateVideos } from '../modules';
import './style.scss';

class Post extends Component {

  constructor() {
    super();
    this.manipulateVideos = this.manipulateVideos.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', debounce(this.manipulateVideos, 200));
    document.addEventListener('touchmove', debounce(this.manipulateVideos, 200));
  }

  manipulateVideos() {
    manipulateVideos(this.props.post)
  }

  render() {

    let post = this.props.post;
    let sections = buildSections(post.sections, this.props.shown);

    return (
      <div className="Post flex fd-c">
        <div className="header flex jc-sb">
          <h1>{post.work}</h1>
          <h1>{post.title}</h1>
        </div>
        <div className="content">
          {sections}
        </div>
        <div className="fb-comments" data-href={post.fb}
          data-width={(() => {
            var width = 560;
            var x = document.body.clientWidth;
            if (x < 536) { width = x - 44; }
            return width;
          })()} data-numposts="5">
        </div>
      </div>
    );
  }
}

export default Post;

function buildSections(sections, shown) {
  return sections.map((section, i) => {
    return <Section section={section} first={i === 0} shown={shown} key={i} />
  });
}
