import React, { Component } from 'react';
import { caughtLength } from '../../routes/routes';
import CardCollection from '../cards/cardCollection';
import InfiniteScroll from '../InfiniteScroll';

class PokeCollection extends Component {
    constructor() {
        super();
        this.state = {
            load: 20,
            hasMore: true,
            length: 0
        }
    }

    componentDidMount(){   
        caughtLength()
            .then((length) => this.setState({length: length}))
            .then(() => this.getAllCaught());
    }

    getAllCaught() {
        if(this.props.pokemons.length === this.state.length) {
            this.setState({hasMore: false});
            return;
        }
        const path = 'caught?';
        this.props.checkPath(path);
        this.props.getAllCaught(path, this.props.page, this.state.load);
    }

    render() {
        return(
            <div className="col-sm-12 col-md-12">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">My Pokemons</h3>
                <InfiniteScroll
                    error={this.props.error}
                    isLoading={this.props.isLoading}
                    hasMore={this.state.hasMore}
                    fetchData={this.getAllCaught.bind(this)}
                >
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    {this.props.pokemons.map((poke, i) => (
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