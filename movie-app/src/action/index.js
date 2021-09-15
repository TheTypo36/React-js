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
export const ADD_MOVIES = 'ADD_MOVIES';

//action creates
export function addMovies(movies) {
    return ({
        type: ADD_MOVIES,
        movies: movies,
    })
}
