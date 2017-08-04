const SET = 'posts/SET';

const initState = {
  posts: []
};

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {
    case SET:
      editState.posts = action.payload;
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
