// const incCount = {
//     type: "ADD_MOVIES",
//     movies: [m1, m2, m3]
// }

// const decCount = {
//     type: "",
// }

// export default addmovie;
// export default decCount;

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURTIE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
// export const FETCH_DATA
//action creates
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie, // shorthand for movie : movie
  };
}
export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURTIE,
    movie,
  };
}
export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    val,
  };
}
export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=2ceaf248&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        // dispatch({
        //   type: "ADD_MOVIE_TO_SEARCH_RESULT",
        //   movie,
        // });
      });
  };
}
