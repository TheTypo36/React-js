import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITES } from "../action";
const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false,
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
            break;
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val,
            }
            break;
        default:
            return state;
            break;
    }
}