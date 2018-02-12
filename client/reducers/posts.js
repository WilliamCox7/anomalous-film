const SET = 'posts/SET';

const initState = {
  posts: []
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState.posts = action.posts;
      return Object.assign({}, state, editState);

    default: return state;
  }
}

export function setPosts(posts) {
  return {
    type: SET,
    posts: posts
  }
}
