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
    valueOptions.unshift(<option key={0} value="">column value...</option>);

    let titleOptions = this.props.filter.titles.map((title, i) => {
      return <option key={i+1} value={title}>{title}</option>;
    });
    titleOptions.unshift(<option key={0} value="">title...</option>);

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
            <div className="options-row-3 flex">
              <select value={this.props.filter.type} name="type"
                onChange={this.props.updateSelect}>
                <option value="">film type...</option>
                <option value="movie">movie</option>
                <option value="tv-episode">tv episode</option>
                <option value="tv-season">tv season</option>
                <option value="tv-series">tv series</option>
              </select>
            </div>
            {this.props.filter.type && this.props.filter.type !== "movie" && this.props.filter.type !== "tv-series" ? (
              <div className="options-row-4 flex">
                <select value={this.props.filter.title} name="title"
                  onChange={this.props.updateSelect}>
                  {titleOptions}
                </select>
              </div>
            ) : null}
          </div>
        ) : null}
        {this.props.active ? (<div id="filter-overlay"></div>) : null}
      </div>
    );
  }
}

export default Filter;
