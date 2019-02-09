import React, { Component } from 'react';
import CardCollection from '../cards/cardCollection';
import BtnLoad from '../buttons/btnLoad';

class PokeCollection extends Component {
    constructor() {
        super();
        this.state = {
            load: 20,
        }
    }

    componentDidMount(){   
        if(this.props.page === 1) {
            this.props.getLength();
            this.getAllCaught();
        }
    }

    getAllCaught() {
        if (!this.props.hasMore) return;
        this.props.getAllCaught(this.props.page, this.state.load);
    }

    render() {
        return(
            <div className="col-sm-12 col-md-12">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">My Pokemons</h3>
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    {this.props.pokemons.map((poke, i) => (
                        <CardCollection 
                            link={`/pokemon-card/${poke.pokemonId}`}
                            src={(`../../pokemons/${(poke.pokemonId <= 720) ? poke.pokemonId : poke.pokemonId%100+1}.png`)}
                            pokemon={poke}
                            key={i}
                        />
                    ))}
                </div>
                <div className="col-md-4 mx-auto mb-3">
                {(!this.props.hasMore) ? 
                    <p className="text-center font-weight-bold">You seen all!</p>
                :
                    <BtnLoad 
                        click={this.getAllCaught.bind(this)}
                        isLoading={this.props.isLoading}
                        error={this.props.error}/>
                }
                </div>
            </div>
        )
    }
}

export default PokeCollection;