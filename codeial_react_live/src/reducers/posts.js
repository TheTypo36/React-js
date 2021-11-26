import { UPDATE_POSTS } from '../actions/actionTypes';

//our root state is object
export default function posts(state = [], action) {
  //{post: []}
  console.log('this is posts22', action.posts);
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
