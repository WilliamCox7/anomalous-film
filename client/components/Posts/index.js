import { React, Component, connect } from '../../packages';
import { Post } from '../';
import './style.scss';

class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sections: buildSections(props.post)
    }
  }

  render() {

    return (
      <div className="Posts flex jc-c">
        <div className="section-wrapper flex">
          {this.state.sections}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps)(Posts);

function buildSections(posts) {
  return posts.map((post, i) => {
    return (
      <section className="rendered-sections" key={post.id} style={i !== 1 ? {opacity: 0} : null}>
        <Post post={post} />
      </section>
    );
  });
}
