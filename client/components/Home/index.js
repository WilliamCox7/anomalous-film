import { React, Component, connect } from '../../packages';
import { Thumbnail } from '../';
import './style.scss';

class Home extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    var thumbs = document.getElementsByClassName("Thumbnail");
    reveal(thumbs, 0);
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

function reveal(thumbs, index) {
  setTimeout(function() {
    thumbs[index].style.opacity = 1.0;
    index++;
    if (thumbs[index]) {
      reveal(thumbs, index);
    }
  }, 100);
}

function createPostThumbnails(posts) {
  return posts.map((post) => {
    return <Thumbnail post={post} key={post.id} />;
  });
}
