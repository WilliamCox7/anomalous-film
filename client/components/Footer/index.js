import { React, Component, Link } from '../../packages';
import './style.scss';

class Footer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="flex jc-c" id="Footer">
        <div className="footer-container flex jc-sb ai-c">

          <section className="flex jc-sb ai-c">
            <a className="sm" href="/">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a className="sm" href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </section>

          <section>
            <Link to="/list" className="link">
              my top movies
            </Link>
            <Link to="/about" className="link">
              about us
            </Link>
          </section>

        </div>
      </div>
    );
  }
}

export default Footer;
