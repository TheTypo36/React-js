import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURTIE, SET_SHOW_FAVOURITE } from '../action';

const initialMoviesState = {
    list: [],
    favourites: [],
    ShowFavourites: false,
}

const initialSearchState = {
    result: {},
}
const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState,
}
export function movies(state = initialMoviesState, action) {
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies,
    //     }
    // }
    // return state;
    //generally switch case is preffered on if-else statements
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies,
            }
            break;
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites],
            }
            break;
        case REMOVE_FAVOURTIE:
            const filterArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filterArray
            }
            break;
        case SET_SHOW_FAVOURITE:
            return {
                ...state,
                ShowFavourites: action.val,
            }
        default:
            return state;
            break;
    }
}
export function search(state = initialSearchState, action) {
    return {
        state,
    }
}

export default function rootReducer(state = initialRootState, action) {
    return {
        movies: movies(state.movies, action),
        search: search(state.search, action),
    }
}


