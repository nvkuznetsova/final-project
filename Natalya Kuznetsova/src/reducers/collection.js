import { actionTypes } from '../actions/collection';
import { CATCH_POKE } from '../actions/action-catch';
const initState = {
    isLoading: false,
    error: false,
    pokemons: [],
    page: 1,
    size: 1,
    hasMore: true
}

const collectionReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.COLLECTION_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case actionTypes.COLLECTION_HAS_ERROR:
            return {
                error: action.error,
                msg: action.msg,
            }
        case actionTypes.COLLECTION_ADD_PAGE:
           return {
                ...state,
                page: action.page
            }
        case actionTypes.COLLECTION_LENGTH: 
            return {
                ...state,
                size: action.size
            }
        case actionTypes.COLLECTION_LOADING_SUCCESS:
            if(state.pokemons.length !== 0) {
                return {
                    ...state, 
                    pokemons: [...state.pokemons, ...action.pokemons],
                    hasMore: ((state.pokemons.length + action.pokemons.length) !== state.size) ? 
                        true : false
                }
            } else {
                return {
                    ...state, 
                    pokemons: [...action.pokemons]
                }
            } 
        case CATCH_POKE: 
            return initState;    
        default:
            return state;
    }
}

export default collectionReducer;