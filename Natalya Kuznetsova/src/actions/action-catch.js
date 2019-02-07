import { catchPokemon } from '../routes/routes';

export const CATCH_POKE = 'CATCH_POKE';

export const catchPoke = (bool) => {
    return {
        type: CATCH_POKE,
        isCaught: bool
    }
}

export const catchedPokemon = (poke) => {
    return (dispatch) => {
        dispatch(catchPoke(true));
        catchPokemon(poke);
        dispatch(catchPoke(false));       
    }
}