const LEN = 'posts/LEN';
const HOME = 'posts/HOME';
const PREV = 'posts/PREV';
const NEXT = 'posts/NEXT';

const initState = {
  index: 0,
  length: undefined
};

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {
    case LEN:
      editState.length = action.payload;
      return Object.assign({}, state, editState);
    case HOME:
      editState.index = 0;
      return Object.assign({}, state, editState);
    case PREV:
      editState.index = editState.index - 1;
      return Object.assign({}, state, editState);
    case NEXT:
      editState.index = editState.index + 1;
      return Object.assign({}, state, editState);
    default: return state;
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
