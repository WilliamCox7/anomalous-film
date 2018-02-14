import { React, Component, Link } from '../../packages';
import { logo } from '../../assets';
import { moveLeft, moveRight } from '../modules';
import './style.scss';

class Nav extends Component {

  constructor() {
    super();
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
              <i className="fas fa-chevron-left" onClick={moveLeft}></i>
            </span>
            <span className="nav-icon">
              <i className="fas fa-chevron-right" onClick={moveRight}></i>
            </span>
          </section>

        </div>
      </div>
    );
  }
}

export default Nav;
