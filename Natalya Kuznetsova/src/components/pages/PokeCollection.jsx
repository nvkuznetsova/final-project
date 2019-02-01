//add onClick handler!
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getCaught } from '../../routes/routes';

class PokeCollection extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            pokemons: [],
            tmp: [],
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
        const load = 10;
        this.setState({
            tmp: this.state.tmp.concat(this.state.pokemons.splice(0, load)),
        });
    }

    render() {
        return(
            <div className="col-sm-12 col-md-12">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">My Pokemons</h3>
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
                        <div className="card bg-light mb-3 border-success shadow-sm" key={i}>
                            <Link to={`/pokemon-card/${poke.id}`} >
                                <img className="card-img-top img-fluid pokeImg" src={(`../../pokemons/${(poke.id <= 720) ? poke.id : poke.id%100+1}.png`)} alt="pokemon" />
                            </Link>
                            <div className="card-body">
                                <p className="card-text text-capitalize">#{poke.id} {poke.name}</p>
                                <p className="card-text text-capitalize">Caught: {poke.date}</p>
                                <Link to={`/pokemon-card/${poke.id}`} className="btn btn-success btn-block btn-lg">See my card!</Link>
                            </div>
                        </div>
                    ))}
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default PokeCollection;