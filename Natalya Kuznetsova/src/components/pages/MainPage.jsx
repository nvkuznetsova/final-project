import React, { Component } from 'react';
import { getAllPokemons, catchPokemon, allLength } from '../../routes/routes';
import CardAll from '../cards/cardAll';
import InfiniteScroll from '../InfiniteScroll';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: 50,
            hasMore: true,
            length: 0,
        }
    }

    componentDidMount(){   
        allLength()
            .then((length) => this.setState({length: length}))
            .then(() => this.getAll());
    }

    onCatch(poke, ev) {
        ev.preventDefault();
        ev.target.setAttribute('disabled', 'true');
        ev.target.classList.remove('btn-primary');
        ev.target.classList.add('btn-secondary');
        ev.target.textContent = 'You caught me!';
        catchPokemon(poke);
    }

    getAll() {
       /* if(this.props.pokemons.length === this.state.length) {
            this.setState({hasMore: false});
            return;
        }*/
        this.props.getAll(this.state.page, this.state.load);
    }

    render() {
        return(
            <div className="col-md-12">
                <h3 className="text-center text-md-left mt-3 mb-3">All Pokemons</h3>
                <InfiniteScroll
                    error={this.props.error}
                    isLoading={this.props.isLoading}
                    hasMore={this.state.hasMore}
                    fetchData={this.getAll.bind(this)}
                >
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        {/*this.props.pokemons.map((poke, i) => (
                            <CardAll 
                                link={`/pokemon-card/${poke.id}`}
                                src={(`../../pokemons/${(poke.id <= 720) ? poke.id : poke.id%100+1}.png`)}
                                pokemon={poke}
                                click={this.onCatch.bind(this, poke)}
                                key={i}
                            />
                        ))*/}
                        
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default Main;