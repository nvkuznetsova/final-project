import PokeCollection from '../components/pages/PokeCollection';
import { connect } from 'react-redux';
import {  } from '../actions/pokemons';

const mapStateToProps = (state) => ({
    isLoading: state.pokemonsReducer.isLoading,
    error: state.pokemonsReducer.error,
    pokemons: state.pokemonsReducer.pokemons,
    page: state.pokemonsReducer.page
});

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCaught: (path, page, limit) => dispatch(getAll(path, page, limit))
    };
};
const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(PokeCollection);
export default CollectionContainer;