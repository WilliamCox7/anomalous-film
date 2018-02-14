import { React, Component, connect, SwipeableViews } from '../../packages';
import { Post } from '../';
import { manipulateVideos, changePost } from '../modules';
import { setIndex, setChangedIndex } from '../../reducers/posts';
import './style.scss';

class Posts extends Component {

  constructor() {
    super();
    this.onChangeIndex = this.onChangeIndex.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount() {
    var postIndex = Number(localStorage.getItem("postIndex"));
    if (postIndex !== null) {
      changePost(postIndex, this.props.setIndex, this.props.setChangedIndex);
    }
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 37) {
        if (this.props.posts.changedIndex > 0) {
          var changedIndex = this.props.posts.changedIndex - 1;
          changePost(changedIndex, this.props.setIndex, this.props.setChangedIndex);
        }
      } else if (e.keyCode === 39) {
        if (this.props.posts.changedIndex < this.props.posts.posts.length - 1) {
          var changedIndex = this.props.posts.changedIndex + 1;
          changePost(changedIndex, this.props.setIndex, this.props.setChangedIndex);
        }
      }
    });
  }

  onChangeIndex(index) {
    this.props.setChangedIndex(index);
    localStorage.setItem("postIndex", index);
  }

  onTransitionEnd() {
    manipulateVideos(this.props.posts.posts[this.props.posts.changedIndex]);
  }

  render() {

    let posts = this.props.posts.posts.map((post, i) => {
      return <Post post={post} key={i} shown={i === this.props.posts.index} />;
    });

    return (
      <div className="Posts">
        <SwipeableViews resistance index={this.props.posts.index} onChangeIndex={this.onChangeIndex} onTransitionEnd={this.onTransitionEnd}>
          {posts}
        </SwipeableViews>
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
  setIndex: setIndex,
  setChangedIndex: setChangedIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
