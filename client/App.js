import { React, Component, connect, axios } from './packages';
import { Nav, Footer } from './components';
import { setPosts } from './reducers/posts';
import { getPostsByIndex } from './components/modules';
import './reset.scss';
import './main.scss';

class App extends Component {

  componentDidMount() {
    axios.get('/posts').then((response) => {
      this.props.setPosts(response.data);
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setPosts: setPosts
}

export default connect(null, mapDispatchToProps)(App);
