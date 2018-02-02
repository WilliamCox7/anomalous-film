import { React, Component } from '../../packages';
import './style.scss';

class Footer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="Footer flex jc-c">
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
            <a className="about" href="/about">
              about us
            </a>
          </section>

        </div>
      </div>
    );
  }
}

export default Footer;
