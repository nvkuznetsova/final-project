import Main from '../components/pages/MainPage';
import { connect } from 'react-redux';
import { getAll } from '../actions/pokemons';

const mapStateToProps = (state) => ({
    isLoading: state.pokemonsReducer.isLoading,
    error: state.pokemonsReducer.error,
    pokemons: state.pokemonsReducer.pokemons,
    page: state.pokemonsReducer.page,
});

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: (page, limit) => dispatch(getAll(page, limit))
    };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;