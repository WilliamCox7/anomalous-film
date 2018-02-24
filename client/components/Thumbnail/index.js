import { React, Component, Link } from '../../packages';
import './style.scss';

// the display of each post on the home page
class Thumbnail extends Component {

  constructor() {
    super();
    this.reveal = this.reveal.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  // saves index in localStorage (takes user to that specific post)
  setIndex() {
    localStorage.setItem("postIndex", this.props.index);
  }

  // changes opacity to thumbnail when image loads
  reveal(e) {
    e.target.parentElement.parentElement.style.opacity = 1;
  }

  render() {

    return (
      <div className="Thumbnail">
        <Link to="/post" className="thumb-link flex jc-c ai-c fd-c" onClick={this.setIndex}>
          <img src={this.props.post.thumbnail} onLoad={this.reveal} />
          <div className="circle" style={{
            backgroundImage: `url(${this.props.post.thumbnail})`}}>
          </div>
          <div className="circle-text flex fd-c ai-c">
            <h1>{this.props.post.work}</h1>
            <h1>{this.props.post.title}</h1>
          </div>
        </Link>
      </div>
    );
  }
}

export default Thumbnail;
