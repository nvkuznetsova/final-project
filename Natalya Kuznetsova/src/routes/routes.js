import axios from 'axios';
const URL = 'http://localhost:3000';

//All pokemons
export const getAllPokemons = (path, page, limit) => {
    return axios
            .get(`${URL}/${path}_page=${page}&_limit=${limit}`, { 
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            })
            .catch((err) => {
                return err
            });
}

//Caught pokemons 
/*export const getCaught = (page, limit) => {
    return axios
            .get(`${URL}/caught?_page=${page}&_limit=${limit}`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            })
            .catch((err) => {
                return err
            });
}*/

//Get pokemon info
export const getPokemon = (id) => {
    return axios
            .get(`${URL}/pokemons/${id}?_embed=caught`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            });
}

export const catchPokemon = (pokemon) => {
    return axios
            .post(`${URL}/caught`, 
            { id: pokemon.id,
              name: pokemon.name,
              date: new Date().toLocaleDateString(),
              pokemonId: pokemon.id
            },
            {headers: {'Content-Type' : 'application/json'}})
            .then(res => {
                return res.data;
            });
}

export const allLength = () => {
    return axios
        .get(`${URL}/pokemons`, {
            headers: {'Content-Type' : 'application/json'}
        })
        .then(res => {
            return res.data.length;
        });
}

export const caughtLength = () => {
    return axios
        .get(`${URL}/caught`, {
            headers: {'Content-Type' : 'application/json'}
        })
        .then(res => {
            return res.data.length;
        });
}