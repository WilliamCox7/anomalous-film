import { combineReducers } from './packages';
import posts from './reducers/posts';

// combines all reducers into state
export default combineReducers({
  posts
});
