import React, { Component } from 'react';
import Poster from './sub/Poster';
import Content from './sub/Content';
import './style.scss';

class Film extends Component {

  render() {
    return (
      <div className="Film">
        <Poster film={this.props.film} />
        <Content film={this.props.film} />
      </div>
    );
  }
}

export default Film;
