import { actionTypes } from '../actions/pokemon';

const initState = {
    isLoading: false,
    error: false,
    pokemon: {
        id: 0,
        name: '',
        date: ''
    }
}

const pokemonReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.POKEMON_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case actionTypes.POKEMON_HAS_ERROR:
            return {
                error: action.error,
                msg: action.msg,
            }
        case actionTypes.POKEMON_LOADING_SUCCESS:
            return {
                ...state,
                pokemon: {
                    id: action.pokemon.id,
                    name: action.pokemon.name,
                    date: (action.pokemon.caught.length !== 0) ? 
                        action.pokemon.caught[0].date : ''
                }
            }
        default:
            return state;
    }
}

export default pokemonReducer;