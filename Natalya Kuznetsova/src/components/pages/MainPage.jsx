import React, { Component } from 'react';
import { catchPokemon } from '../../routes/routes';
import CardAll from '../cards/cardAll';
import InfiniteScroll from '../InfiniteScroll';
import PropTypes from 'prop-types';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: 50,
        }
    }

    componentDidMount(){   
        this.props.getLength();
        this.getAll();
    }

    onCatch(poke, ev) {
        ev.preventDefault();
        ev.target.setAttribute('disabled', 'true');
        ev.target.classList.remove('btn-primary');
        ev.target.classList.add('btn-secondary');
        ev.target.textContent = 'You caught me!';
        this.props.catchPokemon(poke);
    }

    getAll() {
        if (this.props.hasMore === false) return;
        this.props.getAll(this.props.page, this.state.load);
    }

    render() {
        return(
            <div className="col-md-12">
                <h3 className="text-center text-md-left mt-3 mb-3">All Pokemons</h3>
                <InfiniteScroll
                    error={this.props.error}
                    isLoading={this.props.isLoading}
                    hasMore={this.props.hasMore}
                    fetchData={this.getAll.bind(this)}
                >
                    <div className="d-flex justify-content-around align-items-center flex-wrap">
                        {this.props.pokemons.map((poke, i) => (
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

/*Main.propTypes = {
    getAll: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    pokemons: PropTypes.array.isRequired
  }*/

export default Main;