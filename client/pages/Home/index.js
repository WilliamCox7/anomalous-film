import React, { Component } from 'react';
import Filter from '../../components/Filter';
import Film from '../../components/Film';
import { getAsset } from '../../modules';
import moment from 'moment';
import axios from 'axios';
import './style.scss';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
      filter: {
        column: 'viewed',
        ascending: true,
        value: "",
        values: []
      },
      filterActive: false,
      filmModal: false,
      modalFilm: null
    }
    this.setFilter = this.setFilter.bind(this);
    this.filterArray = this.filterArray.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleDirection = this.toggleDirection.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.compileValues = this.compileValues.bind(this);
    this.openFilmModal = this.openFilmModal.bind(this);
    this.closeFilmModal = this.closeFilmModal.bind(this);
  }

  componentDidMount() {
    this.compileValues();
    document.addEventListener("click", (e) => {
      if (e.target.id === "filter-overlay") {
        this.setState({filterActive: false});
      }
    });
    axios.get('/api/all')
    .then((result) => {
      this.setState({list: result.data});
      console.log(result);
    })
  }

  compileValues() {
    let values = [];
    let newState = Object.assign({}, this.state);
    newState.list.forEach((film) => {
      let value = film[newState.filter.column];
      if (newState.filter.column === "viewed" || newState.filter.column === "released") {
        value = moment(value).format('DD MMM YYYY');
      }
      if (newState.filter.column === "like" || newState.filter.column === "award") {
        value = value.toString();
      }
      values.push(value);
    });
    values = values.filter((item, pos, self) => self.indexOf(item) == pos);
    newState.filter.values = values;
    this.setState(newState);
  }

  toggleFilter() {
    this.setState({filterActive: !this.state.filterActive});
  }

  toggleDirection() {
    let newState = Object.assign({}, this.state);
    newState.filter.ascending = !newState.filter.ascending;
    this.setState(newState);
  }

  setFilter(filter) {
    this.setState({filter});
  }

  updateSelect(e) {
    let selectName = e.target.name;
    let newState = Object.assign({}, this.state);
    newState.filter[selectName] = e.target.value;
    if (selectName === "column" && (e.target.value === "award" || e.target.value === "like")) {
      newState.filter.value = true;
    } else if (selectName === "column") {
      newState.filter.value = "";
    }
    if (selectName === "value" && (newState.filter.column === "award" || newState.filter.column === "like")) {
      newState.filter.value = e.target.value === "true" ? true : false;
    }
    this.setState(newState, () => {
      if (selectName === "column") this.compileValues();
    });
  }

  filterArray(arr) {
    let filter = this.state.filter;
    let filtered = arr.filter((item) => {
      if (filter.value || filter.value === false) {
        let value = item[filter.column];
        if (filter.column === "viewed" || filter.column === "released") {
          value = moment(value).format('DD MMM YYYY');
        }
        if (value.toString() === filter.value.toString()) {
          return true;
        }
        return false;
      } else {
        return true;
      }
    });

    if (filter.ascending) {
      filtered.sort((a, b) => a[filter.column] - b[filter.column]);
    } else {
      filtered.sort((a, b) => b[filter.column] - a[filter.column]);
    }
    return filtered;
  }

  openFilmModal(film) {
    let newState = Object.assign({}, this.state);
    newState.filmModal = true;
    newState.modalFilm = film;
    this.setState(newState);
  }

  closeFilmModal() {
    this.setState({filmModal: false});
  }

  render() {

    let items = this.state.list.slice();
    items = this.filterArray(items);
    let firstFilm = items.shift();

    let list = items.map((item, i) => {
      let viewDate = moment(item.viewed).format('DD MMM YYYY');
      return (
        <div key={i} className="list-item flex" onClick={() => this.openFilmModal(item)}>
          <h1>{i+2}</h1>
          <div className="list-details flex jc-sb">
            <h2>{item.title}</h2>
            <h3>{viewDate}</h3>
          </div>
        </div>
      )
    });

    let scrollStyle = {
      overflow: list.length ? "scroll" : "hidden"
    };

    return (
      <div id="Home" style={scrollStyle}>
        <div className="film-wrapper">
          <Filter setFilter={this.setFilter} filter={this.state.filter} 
            active={this.state.filterActive} toggleFilter={this.toggleFilter}
            toggleDirection={this.toggleDirection} updateSelect={this.updateSelect} />
          <Film film={firstFilm} />
        </div>
        <div className="list-wrapper">
          {list}
        </div>
        {this.state.filmModal ? (
          <div className="film-modal">
            <div className="modal-wrapper">
              <img className="close-x" src={getAsset('close-x')} onClick={this.closeFilmModal} />
              <Film film={this.state.modalFilm} modal />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Home;
