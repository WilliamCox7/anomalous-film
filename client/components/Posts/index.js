import { React, Component, connect, SwipeableViews } from '../../packages';
import { Post } from '../';
import { handleTransition } from '../../reducers/posts';
import './style.scss';

class Posts extends Component {

  constructor() {
    super();
    this.state = {
      index: 0
    }
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleTransitionEnd() {
    this.props.handleTransition(this.state.index);
  }

  handleChangeIndex(index) {
    this.setState({index: index});
  }

  render() {

    let posts = this.props.posts.posts.map((post, i) => {
      return <Post post={post} key={i} />;
    });

    return (
      <div className="Posts">
        <SwipeableViews resistance onChangeIndex={this.handleChangeIndex} onTransitionEnd={this.handleTransitionEnd}>
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
  handleTransition: handleTransition
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
