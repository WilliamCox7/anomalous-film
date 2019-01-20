import React, { Component } from 'react';
import { getAsset } from '../../modules';
import './style.scss';

class Filter extends Component {

  render() {
    return (
      <div className="Filter">
        <img src={getAsset('filter')} />
      </div>
    );
  }
}

export default Filter;
