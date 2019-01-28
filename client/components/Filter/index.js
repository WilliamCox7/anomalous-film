import React, { Component } from 'react';
import { getAsset } from '../../modules';
import './style.scss';

class Filter extends Component {
  render() {

    let actionStyle = {
      background: "#FFC400",
      color: "#131A1F"
    }

    let valueOptions = this.props.filter.values.map((value, i) => {
      return <option key={i+1} value={value}>{value}</option>;
    });

    valueOptions.unshift(<option key={0} value=""></option>);

    return (
      <div className="Filter">
        <img id="filter-button" src={getAsset('filter')} onClick={this.props.toggleFilter} />
        {this.props.active ? (
          <div className="filter-options">
            <div className="options-row-1 flex jc-sb">
              <div className="arrows flex">
                <div className="flex jc-c ai-c" style={
                  this.props.filter.ascending ? actionStyle : null
                } onClick={this.props.toggleDirection}>↑</div>
                <div className="flex jc-c ai-c" style={
                  this.props.filter.ascending ? null : actionStyle
                } onClick={this.props.toggleDirection}>↓</div>
              </div>
              <select value={this.props.filter.column} name="column"
                onChange={this.props.updateSelect}>
                <option value="like">Favorite</option>
                <option value="award">Awarded</option>
                <option value="released">Released</option>
                <option value="rating">My Rating</option>
                <option value="imdb">IMDb Rating</option>
                <option value="viewed">Viewed</option>
                <option value="location">Location</option>
              </select>
            </div>
            <div className="options-row-2 flex">
              <select value={this.props.filter.value} name="value"
                onChange={this.props.updateSelect}>
                {valueOptions}
              </select>
            </div>
          </div>
        ) : null}
        {this.props.active ? (<div id="filter-overlay"></div>) : null}
      </div>
    );
  }
}

export default Filter;
