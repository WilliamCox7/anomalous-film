import { React, Component, connect, axios, BrowserRouter, Switch, Route } from './packages';
import { Nav, Footer, Home, About, Posts } from './components';
import { setPosts } from './reducers/posts';
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
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Posts} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  setPosts: setPosts
}

export default connect(null, mapDispatchToProps)(App);
