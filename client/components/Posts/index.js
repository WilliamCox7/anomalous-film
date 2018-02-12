import { React, Component, connect, SwipeableViews } from '../../packages';
import { Post } from '../';
import { manipulateVideos } from '../modules';
import './style.scss';

class Posts extends Component {

  constructor() {
    super();
    this.state = {
      index: 2,
      changedIndex: 2
    }
    this.onChangeIndex = this.onChangeIndex.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  onChangeIndex(index) {
    this.setState({changedIndex: index});
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
