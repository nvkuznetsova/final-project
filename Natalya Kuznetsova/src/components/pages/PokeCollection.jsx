import React, { Component } from 'react';
import { getCaught, caughtLength } from '../../routes/routes';
import CardCollection from '../cards/cardCollection';
import InfiniteScroll from '../InfiniteScroll';

class PokeCollection extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            page: 1,
            load: 20,
            hasMore: true,
            length: 0,
            error: false,
            isLoading: false
        }
    }

    componentDidMount(){   
        caughtLength()
            .then((length) => this.setState({length: length}))
            .then(() => this.getAllCaught());
    }

    getAllCaught() {
        if(this.state.pokemons.length === this.state.length) {
            this.setState({hasMore: false});
            return;
        }
        getCaught(this.state.page, this.state.load).then(data => {
            this.setState({
                pokemons: [...this.state.pokemons, ...data],
            });
        })
        .then(() => {
            this.setState({
                page: this.state.page + 1,
                isLoading: false
            }); 
        })
        .catch((err) => {
            this.setState({
                error: err.message,
                isLoading: false,
          })
        });  
    }

    render() {
        return(
            <div className="col-sm-12 col-md-12">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">My Pokemons</h3>
                <InfiniteScroll
                    error={this.state.error}
                    isLoading={this.state.isLoading}
                    hasMore={this.state.hasMore}
                    fetchData={this.getAllCaught.bind(this)}
                >
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
                </InfiniteScroll>
            </div>
        )
    }
}

export default PokeCollection;