import { getAllPokemons } from '../routes/routes';

export const actionTypes = {
    DATA_IS_LOADING: 'DATA_IS_LOADING',
    DATA_HAS_ERROR: 'DATA_HAS_ERROR',
    DATA_LOADING_SUCCESS: 'DATA_LOADING_SUCCESS',
    ADD_PAGE: 'ADD_PAGE',
    CHECK_PATH: 'CHECK_PATH'
}

export const dataHasError = (bool, msg) => {
    return {
        type: actionTypes.DATA_HAS_ERROR,
        error: bool,
        msg: msg
    };
}

export const dataIsLoading = (bool) => {
    return {
        type: actionTypes.DATA_IS_LOADING,
        isLoading: bool
    };
}

export const addPage = (num = 1) => {
    return {
        type: actionTypes.ADD_PAGE,
        page: num 
    };
}

export const dataLoadingSuccess = (pokemons) => {
    return {
        type: actionTypes.DATA_LOADING_SUCCESS,
        pokemons
    };
}

export const checkPath = (path) => {
    return {
        type: actionTypes.CHECK_PATH,
        path
    }
}

export const getAll = (path, page, limit) => {
    return (dispatch) => {
        dispatch(dataIsLoading(true));
        
        getAllPokemons(path, page, limit)
            .then(pokemons => {
                dispatch(dataLoadingSuccess(pokemons));
            })
            .then(() => dispatch(dataIsLoading(false)))
            .then(() => dispatch(addPage(page+1)))
            .catch((err) => {
                console.log(err.message);
                dispatch(dataHasError(true, err.message));
                dispatch(dataIsLoading(false));
            });
    };
}