import React, { Component } from 'react';
import { getCaught } from '../../routes/routes';
import CardCollection from '../cards/cardCollection';

class PokeCollection extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            tmp: [],
            length: 0,
            hasMore: true
        }
    }

    componentDidMount(){
        this.getAllCaught();
    }

    getAllCaught() {
        getCaught().then(data => {
            this.setState({
                pokemons: [...data],
                length: data.length
            });
        })
        /*.then(() => {
            if(this.state.pokemons.length !== 0) {
                this.fetchMoreData();
            }
        })*/;  
    }

    fetchMoreData() {
        if(this.state.pokemons.length === 0) {
            this.setState({ hasMore: false });
            return;
        }
        const load = 10;
        this.setState({
            tmp: [...this.state.tmp, ...this.state.pokemons.splice(0, load)]
        });
    }

    render() {
        return(
            <div className="col-sm-12 col-md-12">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">My Pokemons</h3>

                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    {this.state.pokemons.map((poke, i) => (
                        <CardCollection 
                            link={`/pokemon-card/${poke.id}`}
                            src={(`../../pokemons/${(poke.id <= 720) ? poke.id : poke.id%100+1}.png`)}
                            pokemon={poke}
                            key={i}
                        />
                    ))}
                </div>

            </div>
        )
    }
}

export default PokeCollection;