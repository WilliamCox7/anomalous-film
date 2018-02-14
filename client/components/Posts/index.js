import { React, Component, connect, SwipeableViews } from '../../packages';
import { Post } from '../';
import { manipulateVideos } from '../modules';
import './style.scss';

class Posts extends Component {

  constructor() {
    super();
    this.state = {
      index: 0,
      changedIndex: 0
    }
    this.onChangeIndex = this.onChangeIndex.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount() {
    var postIndex = Number(localStorage.getItem("postIndex"));
    console.log(postIndex);
    if (postIndex !== null) {
      this.setState({index: postIndex});
    }
  }

  onChangeIndex(index) {
    this.setState({changedIndex: index});
    localStorage.setItem("postIndex", index);
  }

  onTransitionEnd() {
    manipulateVideos(this.props.posts.posts[this.state.changedIndex]);
  }

  render() {

    let posts = this.props.posts.posts.map((post, i) => {
      return <Post post={post} key={i} shown={i === this.state.index} />;
    });

    return (
      <div className="Posts">
        <SwipeableViews resistance index={this.state.index} onChangeIndex={this.onChangeIndex} onTransitionEnd={this.onTransitionEnd}>
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

export default connect(mapStateToProps)(Posts);
