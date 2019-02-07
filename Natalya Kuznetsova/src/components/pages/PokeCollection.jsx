import React, { Component } from 'react';
import CardCollection from '../cards/cardCollection';
import InfiniteScroll from '../InfiniteScroll';

class PokeCollection extends Component {
    constructor() {
        super();
        this.state = {
            load: 20,
        }
    }

    componentDidMount(){   
        this.props.getLength();
        this.getAllCaught();
    }

    getAllCaught() {
        if (!this.props.hasMore) return;
        this.props.getAllCaught(this.props.page, this.state.load);
    }

    render() {
        return(
            <div className="col-sm-12 col-md-12">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">My Pokemons</h3>
                <InfiniteScroll
                    error={this.props.error}
                    isLoading={this.props.isLoading}
                    hasMore={this.props.hasMore}
                    fetchData={this.getAllCaught.bind(this)}
                >
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
                </InfiniteScroll>
            </div>
        )
    }
}

export default PokeCollection;