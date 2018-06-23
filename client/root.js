import { combineReducers } from './packages';
import posts from './reducers/posts';
import list from './reducers/list';

// combines all reducers into state
export default combineReducers({
  posts, list
});
