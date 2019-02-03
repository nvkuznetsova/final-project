import { getAllPokemons, catchPokemon } from '../routes/routes';

export const actionTypes = {
    DATA_IS_LOADING: 'DATA_IS_LOADING',
    DATA_HAS_ERROR: 'DATA_HAS_ERROR',
    DATA_LOADING_SUCCESS: 'DATA_LOADING_SUCCESS',
    ADD_PAGE: 'ADD_PAGE'
}

export const dataHasError = (bool) => {
    return {
        type: actionTypes.DATA_HAS_ERROR,
        error: bool
    };
}

export const dataIsLoading = (bool) => {
    return {
        type: actionTypes.DATA_IS_LOADING,
        isLoading: bool
    };
}

let num = 1;
export const addPage = () => {
    return {
        type: actionTypes.ADD_PAGE,
        page: num + 1
    };
}

export const dataLoadingSuccess = (pokemons) => {
    return {
        type: actionTypes.DATA_LOADING_SUCCESS,
        pokemons
    };
}

export const getAll = (page, limit) => {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        getAllPokemons(page, limit)
            .then(pokemons => {
                dispatch(dataLoadingSuccess(pokemons))
            })
            .then(() => dispatch(dataIsLoading(false)))
            .then(() => dispatch(addPage()))
            .catch(() => {
                dispatch(dataHasError(true));
                dispatch(dataIsLoading(false));
            });
    };
}