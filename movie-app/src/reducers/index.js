import { ADD_MOVIES, ADD_FAVOURITE } from "../action";
const initialMovieState = {
    list: [],
    favourites: []
}
export default function movies(state = initialMovieState, action) {
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies,
    //     }
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
            break;
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
            break;
        default:
            return state;
            break;
    }
}