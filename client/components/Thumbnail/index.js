import { React, Component, Link } from '../../packages';
import './style.scss';

/**
 * Thumbnail is a component that displays a clickable image
 *  that leads the user to the corresponding post
 * @extends Component
 */

class Thumbnail extends Component {

  /**
   * constructor
   * @method this.reveal bound to component's context
   * @method this.setIndex bound to component's context
   */

  constructor() {
    super();
    this.reveal = this.reveal.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  /**
   * @method setIndex saves index in localStorage (takes user to
   *  that specific post)
   */

  setIndex() {
    localStorage.setItem("postIndex", this.props.index);
  }

  /**
   * @method reveal changes opacity to thumbnail when image loads
   * @param {object} e event object
   */

  reveal(e) {
    e.target.parentElement.parentElement.style.opacity = 1;
  }

  /**
   * @method render renders a javascript/html hybrid
   * @return {jsx} what will be displayed from this component
   */

  render() {
    return (
      <div className="Thumbnail">
        <Link to="/post" className="thumb-link flex jc-c ai-c fd-c" onClick={this.setIndex}>

          <img src={this.props.post.thumbnail} onLoad={this.reveal} />

          <div className="rating">
            {this.props.rating ? (
              <div className="rating">{this.props.rating}</div>
            ) : null}
          </div>

          <div className="circle"></div>

          <div className="circle-text flex fd-c ai-c">
            {this.props.post.work ? (
              <h1>{this.props.post.work}</h1>
            ) : null}
            {this.props.post.rating ? (
              <h1>{this.props.post.rating}%</h1>
            ) : null}
            {this.props.post.title ? (
              <h1>{this.props.post.title}</h1>
            ) : null}
          </div>

        </Link>
      </div>
    );
  }
}

export default Thumbnail;
