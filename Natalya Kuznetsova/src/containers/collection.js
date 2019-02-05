import PokeCollection from '../components/pages/PokeCollection';
import { connect } from 'react-redux';
import { getAll, checkPath } from '../actions/pokemons';

const mapStateToProps = (state) => ({
    isLoading: state.pokemonsReducer.isLoading,
    error: state.pokemonsReducer.error,
    pokemons: state.pokemonsReducer.pokemons,
    page: state.pokemonsReducer.page,
    path: state.pokemonsReducer.path
});

const mapDispatchToProps = (dispatch) => {
    return {
        checkPath: (path) => dispatch(checkPath(path)),
        getAllCaught: (path, page, limit) => dispatch(getAll(path, page, limit))
    };
};
const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(PokeCollection);
export default CollectionContainer;