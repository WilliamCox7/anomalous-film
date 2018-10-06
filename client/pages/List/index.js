import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as Method from './methods';
import { initializeList } from '../../reducers/list';
import SwipeableViews from 'react-swipeable-views';
import './style.scss';

class List extends Component {

  componentDidMount() {
    axios.get('/api/list')
    .then((response) => this.props.initializeList(response.data))
    .catch((error) => console.error(error));
  }

  render() {

    let list = Method.buildList(this.props.list.items);

    return (
      <div id="List" className="flex">
        <SwipeableViews resistance>
          {list}
        </SwipeableViews>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = {
  initializeList: initializeList
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
