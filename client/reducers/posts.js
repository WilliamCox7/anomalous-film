const SET = 'posts/SET';
const SET_IND = 'posts/SET_IND';
const SET_CHA = 'posts/SET_CHA';
const SET_SCH = 'posts/SET_SCH';

const initState = {
  posts: [],
  index: 0,
  changedIndex: 0,
  search: ''
}

export default function reducer(state=initState, action) {
  let editState = Object.assign({}, state);
  switch(action.type) {

    case SET:
      editState.posts = action.posts;
      editState.filteredPosts = action.posts;
      return Object.assign({}, state, editState);

    case SET_IND:
      editState.index = action.index;
      return Object.assign({}, state, editState);

    case SET_CHA:
      editState.changedIndex = action.index;
      return Object.assign({}, state, editState);

    case SET_SCH:
      editState.search = action.search;
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

export function setIndex(index) {
  return {
    type: SET_IND,
    index: index
  }
}

export function setChangedIndex(index) {
  return {
    type: SET_CHA,
    index: index
  }
}

export function setSearch(search) {
  return {
    type: SET_SCH,
    search: search
  }
}
