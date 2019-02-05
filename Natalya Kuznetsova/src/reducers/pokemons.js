import { actionTypes } from '../actions/pokemons';
const initState = {
    isLoading: false,
    error: false,
    pokemons: [],
    page: 1,
    path: ''
}

const pokemonsReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.DATA_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case actionTypes.DATA_HAS_ERROR:
            return {
                error: action.error,
                msg: action.msg,
            }
        case actionTypes.ADD_PAGE:
           return {
            ...state,
            page: action.page
        }
        case actionTypes.CHECK_PATH:
            debugger;
            if(state.path !== action.path) {
                return {
                    pokemons: [],
                    page: 1,
                    path: action.path
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.DATA_LOADING_SUCCESS:
            if(state.pokemons.length !== 0) {
                return {
                    ...state, 
                    pokemons: [...state.pokemons, ...action.pokemons]
                }
            } else {
                return {
                    ...state, 
                    pokemons: [...action.pokemons]
                }
            }
            
        default:
            return state;
    }
}

export default pokemonsReducer;