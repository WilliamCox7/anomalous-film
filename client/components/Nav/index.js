import { React, Component, Link, connect } from '../../packages';
import { logo } from '../../assets';
import { changePost } from '../modules';
import { setIndex, setChangedIndex } from '../../reducers/posts';
import './style.scss';

class Nav extends Component {

  constructor() {
    super();
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  prev() {
    if (this.props.posts.changedIndex > 0) {
      var changedIndex = this.props.posts.changedIndex - 1;
      changePost(changedIndex, this.props.setIndex, this.props.setChangedIndex);
    }
  }

  next() {
    if (this.props.posts.changedIndex < this.props.posts.posts.length - 1) {
      var changedIndex = this.props.posts.changedIndex + 1;
      changePost(changedIndex, this.props.setIndex, this.props.setChangedIndex);
    }
  }

  render() {
    return (
      <div className="Nav flex jc-c">
        <div className="nav-container flex jc-sb ai-c">

          <section>
            <Link to="/" className="logo-link flex ai-c">
              <span className="logo-text">anomalous</span>
              <img src={logo} alt="logo" />
              <span className="logo-text">film</span>
            </Link>
          </section>

          <section className="flex ai-c">
            <input type="text" placeholder="search..." />
            <span className="nav-icon">
              <i className="fas fa-chevron-left" onClick={this.prev}></i>
            </span>
            <span className="nav-icon">
              <i className="fas fa-chevron-right" onClick={this.next}></i>
            </span>
          </section>

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
  setIndex: setIndex,
  setChangedIndex: setChangedIndex
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
