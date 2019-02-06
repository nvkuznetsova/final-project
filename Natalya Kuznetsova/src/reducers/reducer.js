import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import collectionReducer from './collection';
import pokemonReducer from './pokemon';

const reducer = combineReducers({
    pokemonsReducer,
    collectionReducer,
    pokemonReducer
});

export default reducer;