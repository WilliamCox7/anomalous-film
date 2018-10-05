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

        </Link>
      </div>
    );
  }
}

export default Thumbnail;
