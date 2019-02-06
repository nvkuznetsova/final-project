import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import collectionReducer from './collection';

const reducer = combineReducers({
    pokemonsReducer,
    collectionReducer
});

export default reducer;