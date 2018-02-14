import { React, Component, Link, connect, withRouter } from '../../packages';
import { logo } from '../../assets';
import { changePost, filterPosts } from '../modules';
import { setIndex, setChangedIndex, setSearch } from '../../reducers/posts';
import './style.scss';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      length: filterPosts(props.posts.posts, props.posts.search).length
    }
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  prev() {
    if (this.props.posts.changedIndex > 0) {
      var changedIndex = this.props.posts.changedIndex - 1;
      changePost(changedIndex, this.props.setIndex, this.props.setChangedIndex);
    }
  }

  next() {
    if (this.props.posts.changedIndex < this.state.length - 1) {
      var changedIndex = this.props.posts.changedIndex + 1;
      changePost(changedIndex, this.props.setIndex, this.props.setChangedIndex);
    }
  }

  onSearch(e) {
    if (window.location.pathname !== '/') {
      this.props.history.push('/')
    }
    this.props.setSearch(e.target.value);
    localStorage.setItem("searchText", e.target.value);
    var posts = filterPosts(this.props.posts.posts, e.target.value);
    this.setState({length: posts.length});
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
            <input type="text" placeholder="search..." onChange={this.onSearch} value={this.props.posts.search} />
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
  setChangedIndex: setChangedIndex,
  setSearch: setSearch
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
