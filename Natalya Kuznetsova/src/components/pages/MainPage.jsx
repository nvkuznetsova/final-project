import React, { Component } from 'react';
import { getAllPokemons, catchPokemon, allLength } from '../../routes/routes';
import CardAll from '../cards/cardAll';
import InfiniteScroll from '../InfiniteScroll';


class Main extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            page: 1,
            load: 50,
            hasMore: true,
            length: 0,
            error: false,
            isLoading: false
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
        if(this.state.pokemons.length === this.state.length) {
            this.setState({hasMore: false});
            return;
        }
        this.setState({isLoading: true})
        getAllPokemons(this.state.page, this.state.load).then(data => {
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
            <div className="col-md-12">
                <h3 className="text-center text-md-left mt-3 mb-3">All Pokemons</h3>
                <InfiniteScroll
                    error={this.state.error}
                    isLoading={this.state.isLoading}
                    hasMore={this.state.hasMore}
                    fetchData={this.getAll.bind(this)}
                >
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        {this.state.pokemons.map((poke, i) => (
                            <CardAll 
                                link={`/pokemon-card/${poke.id}`}
                                src={(`../../pokemons/${(poke.id <= 720) ? poke.id : poke.id%100+1}.png`)}
                                pokemon={poke}
                                click={this.onCatch.bind(this, poke)}
                                key={i}
                            />
                        ))}
                        
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default Main;