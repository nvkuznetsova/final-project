import Main from '../components/pages/MainPage';
import { connect } from 'react-redux';
import { getAll, getLength } from '../actions/pokemons';
import { catchedPokemon } from '../actions/action-catch';

const mapStateToProps = (state) => ({
    isLoading: state.pokemonsReducer.isLoading,
    error: state.pokemonsReducer.error,
    pokemons: state.pokemonsReducer.pokemons,
    page: state.pokemonsReducer.page,
    hasMore: state.pokemonsReducer.hasMore
});

const mapDispatchToProps = (dispatch) => {
    return {
        getLength: () => dispatch(getLength()),
        catchPokemon: (poke) => dispatch(catchedPokemon(poke)),
        getAll: (page, limit) => dispatch(getAll(page, limit))
    };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;