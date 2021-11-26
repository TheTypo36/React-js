import { UPDATE_POSTS } from './actionTypes.js';
export function fetchPosts() {
  return (dispatch) => {
    const url = 'http://localhost:3000?page=1&limit=5';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updatePosts(data));
      });
  };
}
export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
