import { React, Component, connect, axios, BrowserRouter, Switch, Route } from './packages';
import { Nav, Footer, Home, About, Posts } from './components';
import { setPosts, setSearch } from './reducers/posts';
import './reset.scss';
import './main.scss';

class App extends Component {

  componentDidMount() {
    axios.get('/posts').then((response) => {
      this.props.setPosts(response.data);
    });
    var searchText = localStorage.getItem("searchText");
    if (searchText) {
      this.props.setSearch(searchText);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Posts} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  setPosts: setPosts,
  setSearch: setSearch
}

export default connect(null, mapDispatchToProps)(App);
