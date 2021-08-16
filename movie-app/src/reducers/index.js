import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../action";
const initialMovieState = {
    list: [],
    favourites: [],
    show: [],
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
        case ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
            break;
        case REMOVE_FROM_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
                ...state,
                favourites: filteredArray,
            }
        default:
            return state;
            break;
    }
}