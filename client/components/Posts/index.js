import { React, Component, connect } from '../../packages';
import { Post } from '../';
import './style.scss';

class Posts extends Component {

  constructor() {
    super();
  }

  render() {
    
    let prevPost = this.props.post.prev;
    let currPost = this.props.post.curr;
    let nextPost = this.props.post.next;

    return (
      <div className="Post">
        <section style={prevPost ? {display: "none"} : null}>
          {prevPost ? (<Post post={prevPost} />) : null}
        </section>
        <section>
          <Post post={currPost} />
        </section>
        <section style={nextPost ? {display: "none"} : null}>
          {nextPost ? (<Post post={nextPost} />) : null}
        </section>
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
