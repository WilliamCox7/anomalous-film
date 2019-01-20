import React, { Component } from 'react';
import { getAsset } from '../../modules';
import Hexagon from './sub/Hexagon';
import Content from './sub/Content';
import './style.scss';

class Film extends Component {

  render() {
    return (
      <div className="Film">
        <Hexagon film={this.props.film} />
        <Hexagon film={this.props.film} reflection />
        <Content film={this.props.film} />
      </div>
    );
  }
}

export default Film;
