import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getAllPokemons, catchPokemon } from '../../routes/routes';
import { Link } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            pokemons: [],
            tmp: [],
            load: 50,
            hasMore: true
        }
    }

    componentDidMount(){
        this.getAll();
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
        getAllPokemons().then(data => {
            this.setState({
                pokemons: [...data],
            });
        })
        .then(() => {
            if(this.state.pokemons.length !== 0) {
                this.fetchMoreData();
            } 
        });  
    }

    fetchMoreData() {
        if(this.state.pokemons.length === 0) {
            this.setState({ hasMore: false });
            return;
        }

        this.setState({
            tmp: this.state.tmp.concat(this.state.pokemons.splice(0, this.state.load)),
        });
    }

    render() {
        return(
            <div className="col-md-12">
                <h3 className="text-center text-md-left mt-3 mb-3">All Pokemons</h3>
                <InfiniteScroll
                    dataLength={this.state.pokemons.length}
                    next={this.fetchMoreData.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                      <p className="text-center">
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                >
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        {this.state.tmp.map((poke, i) => (
                            <div className="card bg-light mb-3 border-primary shadow-sm mx-auto" key={i}>
                                <Link to={`/pokemon-card/${poke.id}`}>
                                    <img className="card-img-top img-fluid pokeImg" src={(`../../pokemons/${(poke.id <= 720) ? poke.id : poke.id%100+1}.png`)} alt="pokemon" />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text text-capitalize">#{poke.id} {poke.name} </p>
                                    {(poke.caught.length > 0) ? 
                                        <button href="#" className="btn btn-secondary btn-block btn-lg" disabled>You caught me!</button>
                                    :
                                        <button href="#" className="btn btn-primary btn-block btn-lg" onClick={this.onCatch.bind(this, poke)}>Catch me!</button>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default Main;