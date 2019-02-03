import Main from '../components/pages/MainPage';
import { connect } from 'react-redux';
import { getAll } from '../actions/pokemons';

const mapStateToProps = (state) => ({
    isLoading: state.pokemonsReducer.isLoading,
    error: state.pokemonsReducer.error,
    page: state.pokemonsReducer.page,
    pokemons: state.pokemonsReducer.pokemons
});

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: (page, limit) => dispatch(getAll(page, limit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);