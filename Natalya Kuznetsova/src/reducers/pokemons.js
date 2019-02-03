import { actionTypes } from '../actions/pokemons';
const initState = {
    isLoading: false,
    error: false,
    page: 1,
    pokemons: []
}

const pokemonsReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.DATA_IS_LOADING:
            return action.isLoading;
        case actionTypes.DATA_HAS_ERROR:
            return action.error;
        case actionTypes.ADD_PAGE:
            return action.page;
        case actionTypes.DATA_LOADING_SUCCESS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.pokemons]
            }
        default:
            return state;
    }
}

export default pokemonsReducer;