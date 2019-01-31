import axios from 'axios';
const URL = 'http://localhost:3000';

//All pokemons
export const getAllPokemons = () => {
    return axios
            .get(`${URL}/pokemons/?_embed=caught`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            });
}

//Caught pokemons 
export const getCaught = () => {
    return axios
            .get(`${URL}/caught`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data;
            });
}

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