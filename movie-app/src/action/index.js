// {
//     type: 'ADD_MOVIES'
//     Movie: [m1, m2, m3];
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';


//action  creators
export default function addMovie(movies) {
    return ({
        type: ADD_MOVIES,
        movies
    });
}