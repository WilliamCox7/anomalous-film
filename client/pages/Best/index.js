import React, { Component } from 'react';
import Film from '../../components/Film';
import Menu from '../../components/Menu';
import { getAsset } from '../../modules';
import moment from 'moment';
import axios from 'axios';
import './style.scss';

class Best extends Component {

  constructor() {
    super();
    this.state = {
      list: [{}],
      filmModal: false,
      modalFilm: null,
      menuActive: false
    }
    this.openFilmModal = this.openFilmModal.bind(this);
    this.closeFilmModal = this.closeFilmModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", (e) => {
      if (e.target.id === "menu-overlay") {
        this.setState({menuActive: false});
      }
    });
    let year = window.location.search.split("=")[1];
    console.log(year);
    axios.get(`/api/best-picture/${year}`)
    .then((result) => {
      if (!result.data.length) result.data.push({});
      this.setState({list: result.data});
    })
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

  toggleMenu() {
    this.setState({menuActive: !this.state.menuActive});
  }

  render() {

    let items = this.state.list.slice();
    let firstFilm = items.shift();

    let list = items.map((item, i) => {
      return (
        <div key={i} className="list-item flex" onClick={() => this.openFilmModal(item)}>
          <h1>{i+2}</h1>
          <div className="list-details flex jc-sb">
            <h2>{item.title}</h2>
            <h3>{item.rating}</h3>
          </div>
        </div>
      )
    });

    let scrollStyle = {
      overflow: list.length ? "scroll" : "hidden"
    };

    return (
      <div id="Best" style={scrollStyle}>
        <div className="film-wrapper">
          <Menu active={this.state.menuActive} toggleMenu={this.toggleMenu} />
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

export default Best;
