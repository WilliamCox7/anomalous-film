import React, { Component } from 'react';
import { getAsset } from '../../modules';
import './style.scss';

class Menu extends Component {
  render() {

    let year = new Date().getFullYear();
    let bestPictureUrl = `/best-picture?year=${year}`;

    return (
      <div className="Menu">
        <img id="menu-button" src={getAsset('menu')} onClick={this.props.toggleMenu} />
        {this.props.active ? (
          <div className="menu-options">
            <div className="menu-item">
              <a href="/">Home</a>
            </div>
            <div className="menu-item">
              <a href={bestPictureUrl}>Best Picture</a>
            </div>
          </div>
        ) : null}
        {this.props.active ? (<div id="menu-overlay"></div>) : null}
      </div>
    );
  }
}

export default Menu;
