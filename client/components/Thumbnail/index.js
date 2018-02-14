import { React, Component, Link } from '../../packages';
import './style.scss';

class Thumbnail extends Component {

  constructor() {
    super();
    this.reveal = this.reveal.bind(this);
  }

  reveal(e) {
    e.target.parentElement.parentElement.style.opacity = 1;
  }

  render() {

    return (
      <div className="Thumbnail">
        <Link to="/post" className="thumb-link flex jc-c ai-c fd-c">
          <img src={this.props.post.thumbnail} onLoad={this.reveal} />
          <h1>{this.props.post.work}</h1>
          <h1>{this.props.post.title}</h1>
        </Link>
      </div>
    );
  }
}

export default Thumbnail;
