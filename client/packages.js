import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import thunk from 'redux-thunk';
import axios from 'axios';
import YouTube from 'react-youtube';
import SwipeableViews from 'react-swipeable-views';
import debounce from 'debounce';

export {
  React, Component, connect, Provider, combineReducers, createStore, applyMiddleware,
  compose, ReactDOM, Router, Route, hashHistory, thunk, axios, YouTube, SwipeableViews,
  debounce
}
