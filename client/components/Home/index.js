import { React, Component, connect } from '../../packages';
import { Thumbnail } from '../';
import './style.scss';

class Home extends Component {

  constructor() {
    super();
  }

  render() {

    let posts = createPostThumbnails(this.props.posts.posts);

    return (
      <div className="Home">
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

export default connect(mapStateToProps)(Home);

function createPostThumbnails(posts) {
  return posts.map((post) => {
    return <Thumbnail post={post} key={post.id} />;
  });
}
