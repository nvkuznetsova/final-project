import React from 'react';
import { Switch, Route} from 'react-router-dom';
import MainContainer from '../containers/pokemons';
import CollectionContainer from './pages/PokeCollection';
import PokemonPage from './pages/PokemonPage';
import Navbar from './Navbar';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 mx-auto">
                    <Navbar />
                    <h1 className="text-center text-uppercase mt-3">Pokedex</h1>
                    <Switch>
                        <Route exact path='/' component={MainContainer} />
                        <Route path='/collection' component={CollectionContainer} />
                        <Route path='/pokemon-card/:id' component={PokemonPage} />
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default App;