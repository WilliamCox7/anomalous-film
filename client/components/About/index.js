import { React, Component } from '../../packages';
import { logo } from '../../assets';
import './style.scss';

class About extends Component {

  constructor() {
    super();
  }

  loadLogo() {
    document.getElementById("logo").style.opacity = 1;
  }

  render() {
    return (
      <div className="About flex jc-c ai-c">
        <div id="logo" className="flex fd-c ai-c">
          <span>
            <img src={logo} alt="logo" onLoad={this.loadLogo} />
          </span>
          <h1>anomalous film</h1>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris tempor est aliquet, tempus est vitae, tristique
              quam. Sed id dui sagittis, laoreet odio sit amet, dignissim
              libero. Aenean ac volutpat risus. Vivamus dapibus nisi ac
              vestibulum vestibulum. Aliquam nibh nunc, mattis a placerat
              eget, lacinia sed augue. Integer ac tellus non enim lobortis
              posuere. Proin pulvinar ullamcorper elit, id eleifend tortor
              suscipit eu.
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Duis lectus dolor,
              rhoncus at risus sit amet, iaculis aliquet arcu. Maecenas non
              nisl facilisis, accumsan arcu eu, dignissim turpis. Vestibulum
              iaculis est nunc, id vehicula odio imperdiet bibendum. Fusce
              pellentesque ut ligula sit amet vehicula. Duis pellentesque
              pulvinar molestie. Mauris lobortis libero quis faucibus faucibus.
              Sed turpis orci, laoreet a nunc ut, interdum molestie metus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
