import { combineReducers } from './packages';
import posts from './reducers/posts';
import post from './reducers/post';

export default combineReducers({
  posts, post
});
