import Main from '../components/pages/MainPage';
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
        getAll: (path, page, limit) => dispatch(getAll(path, page, limit))
    };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;