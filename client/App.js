import { React, Component, connect, axios, BrowserRouter, Switch, Route } from './packages';
import { Nav, Footer, Home, About, Posts, List } from './components';
import { setPosts, setSearch } from './reducers/posts';
import { setList } from './reducers/list';
import './reset.scss';
import './main.scss';

// root component
class App extends Component {

  componentDidMount() {

    // initializes the posts reducer
    axios.get('api/posts').then((response) => {
      this.props.setPosts(response.data);

      // retrieves last saved search (pick up where user left off)
      var searchText = localStorage.getItem("searchText");
      if (searchText) this.props.setSearch(searchText);

    }).catch((error) => {

      // ToDo: if no posts come back, show an "empty" message

    });

    // initializes the posts reducer
    axios.get('/api/list').then((response) => {
      this.props.setList(response.data);
    }).catch((error) => {

      // ToDo: if no list come back, show an "empty" message

    });

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/post" component={Posts} />
            <Route path="/list" component={List} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  setPosts: setPosts,
  setSearch: setSearch,
  setList: setList
}

export default connect(null, mapDispatchToProps)(App);
