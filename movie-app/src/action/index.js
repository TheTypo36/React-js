// {
//     type: 'ADD_MOVIES'
//     Movie: [m1, m2, m3];
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';


//action  creators
export function addMovie(movies) {
    return {
        type: ADD_MOVIES,
        movies
    };
}
export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    };
}