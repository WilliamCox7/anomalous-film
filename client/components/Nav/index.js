import { React, Component } from '../../packages';
import { logo } from '../../assets';
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
            <a href="/" className="logo-link flex ai-c">
              anomalous
              <img src={logo} alt="logo" />
              film
            </a>
          </section>

          <section className="flex ai-c">
            <input type="text" placeholder="search..." />
            <span>
              <i className="fas fa-chevron-left"></i>
            </span>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </section>

        </div>
      </div>
    );
  }
}

export default Nav;
