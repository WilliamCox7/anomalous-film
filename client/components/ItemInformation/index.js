import React, { Component } from 'react';
import { getAsset } from '../../modules';
import './style.scss';

class ItemInformation extends Component {
  render() {
    return (
      <div className="ItemInformation">
        <div className="title flex ai-fe">
          <h1>{this.props.item.title}</h1>
          <p>({this.props.item.released})</p>
        </div>
        <p className="plot">{this.props.item.plot}</p>
        <div className="space"></div>
        <div className="ratings flex">
          <div className="flex ai-c">
            <img src={getAsset('imdb', 'png')} />
            <h3>{this.props.item.imdb}</h3>
          </div>
          <div className="flex ai-c">
            <img src={getAsset('logo')} />
            <h3>{this.props.item.rating}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemInformation;
