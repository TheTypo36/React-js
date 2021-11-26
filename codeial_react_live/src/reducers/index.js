import { combineReducers } from 'redux';
import posts from './posts';

console.log('this is post2', posts);
export default combineReducers({
  posts,
});
