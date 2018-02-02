import { React, Component } from '../../packages';
import './style.scss';

class Thumbnail extends Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="Thumbnail">
        <a className="thumb-link flex jc-c ai-c fd-c" href="/#/post">
          <img src={this.props.post.thumbnail} />
          <h1>{this.props.post.work}</h1>
          <h1>{this.props.post.title}</h1>
        </a>
      </div>
    );
  }
}

export default Thumbnail;
