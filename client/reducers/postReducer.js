const SET = 'posts/SET';
const LEN = 'posts/LEN';
const HOME = 'posts/HOME';
const PREV = 'posts/PREV';
const NEXT = 'posts/NEXT';
const SRCH = 'posts/SRCH';
const GOTO = 'posts/GOTO';

const initState = {
  posts: [],
  index: 0,
  length: undefined,
  search: ''
};

function saveIndex(index) {
  localStorage.setItem("index", index);
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {
    case SET:
      editState.posts = action.payload;
      return Object.assign({}, state, editState);
    case LEN:
      editState.length = action.payload;
      return Object.assign({}, state, editState);
    case HOME:
      editState.index = 0;
      saveIndex(editState.index);
      return Object.assign({}, state, editState);
    case PREV:
      editState.index = editState.index - 1;
      saveIndex(editState.index);
      return Object.assign({}, state, editState);
    case NEXT:
      editState.index = editState.index + 1;
      saveIndex(editState.index);
      return Object.assign({}, state, editState);
    case SRCH:
      editState.search = action.payload;
      return Object.assign({}, state, editState);
    case GOTO:
      editState.index = action.payload;
      saveIndex(editState.index);
      editState.search = '';
      return Object.assign({}, state, editState);
    default: return state;
  }
}

export function set(posts) {
  return {
    type: SET,
    payload: posts
  }
}

export function setLen(len) {
  return {
    type: LEN,
    payload: len
  }
}

export function home() {
  return {
    type: HOME
  }
}

export function prev() {
  return {
    type: PREV
  }
}

export function next() {
  return {
    type: NEXT
  }
}

export function search(search) {
  return {
    type: SRCH,
    payload: search
  }
}

export function setPost(index) {
  return {
    type: GOTO,
    payload: index
  }
}
