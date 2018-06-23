const SET = 'list/SET';

const initState = {
  list: []
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState.list = action.payload;
      return Object.assign({}, state, editState);

    default: return state;
  }
}

export function setList(list) {
  return {
    type: SET,
    payload: list
  }
}
