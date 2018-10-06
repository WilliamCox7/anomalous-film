import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as Method from './methods';
import { initializeList } from '../../reducers/list';
import SwipeableViews from 'react-swipeable-views';
import './style.scss';

class List extends Component {

  constructor() {
    super();
    this.state = {
      x: undefined,
      y: undefined,
      z: undefined,
      rotateX: undefined,
      rotateY: undefined
    }
  }

  componentDidMount() {
    axios.get('/api/list')
    .then((response) => this.props.initializeList(response.data))
    .catch((error) => console.error(error));
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', (e) => {
        let xSide = e.accelerationIncludingGravity.x >= 0 ? 'right' : 'left';
        let zSide = e.accelerationIncludingGravity.z >= 0 ? 'floor' : 'ceiling';
        let ySide = e.accelerationIncludingGravity.y >= 0 ? 'down' : 'up';
        let rotateY = 0, rotateX = 0;
        if ((xSide === 'right' && zSide === 'ceiling') || (xSide === 'left' && zSide === 'floor')) rotateY = -((Math.abs(e.accelerationIncludingGravity.x) / 10) * 15);
        if ((xSide === 'left' && zSide === 'ceiling') || (xSide === 'right' && zSide === 'floor')) rotateY = ((Math.abs(e.accelerationIncludingGravity.x) / 10) * 15);
        if ((ySide === 'up' && zSide === 'ceiling') || (ySide === 'down' && zSide === 'floor')) rotateX = -((Math.abs(e.accelerationIncludingGravity.y) / 10) * 15);
        if ((ySide === 'down' && zSide === 'ceiling') || (ySide === 'up' && zSide === 'floor')) rotateX = ((Math.abs(e.accelerationIncludingGravity.y) / 10) * 15);
        this.setState({
          x: e.accelerationIncludingGravity.x,
          y: e.accelerationIncludingGravity.y,
          z: e.accelerationIncludingGravity.z,
          rotateX: rotateX,
          rotateY: rotateY
        });
      });
    }
  }

  render() {

    let list = Method.buildList(this.props.list.items, this.state);

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
