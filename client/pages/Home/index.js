import React, { Component } from 'react';
import * as Method from './methods';
import Filter from '../../components/Filter';
import Film from '../../components/Film';
import './style.scss';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      poster: "https://i.pinimg.com/originals/13/38/7b/13387b189da77d448e2e8b73bef3e9bb.jpg",
      posterPos: "2px -96px",
      like: true,
      award: true,
      title: "Whiplash",
      released: new Date(2011, 3, 11),
      tagline: "You can erase someone from your mind. Getting them out of your heart is another story.",
      rating: 8.3,
      imdb: 6.9,
      viewed: new Date(2019, 0, 15),
      location: "Megaplex at Thanksgiving Point"
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div id="Home">
        <Filter />
        <Film film={this.state} />
      </div>
    );
  }
}

export default Home;
