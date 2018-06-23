import { React, Component, connect } from '../../packages';
import { Thumbnail } from '../';
import { filterPosts } from '../modules';
import { setLength } from '../../reducers/posts';
import './style.scss';

class Home extends Component {
  render() {

    let posts = [];

    if (this.props.posts.search) {
      posts = filterPosts(this.props.posts.posts, this.props.posts.search);
    } else {
      posts = this.props.posts.posts;
    }

    posts = createPostThumbnails(posts);

    return (
      <div id="Home">
        <div className="home-wrapper flex fw-w">
          {posts}
        </div>
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
  setLength: setLength
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

function createPostThumbnails(posts) {
  return posts.map((post, i) => {
    return <Thumbnail post={post} key={i} index={i} />;
  });
}
