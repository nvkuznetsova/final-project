import React, { Component } from 'react';
import CardInfo from '../cards/cardInfo';

class PokeCard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getPokemon(this.props.match.params.id);
    }

    render() {
        return(
            <div className="col-sm-12 col-md-6 mx-auto">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">Pokemon Card</h3>
                <CardInfo 
                    src={(`../../pokemons/${(this.props.pokemon.id <= 720) ? this.props.pokemon.id : this.props.pokemon.id%100+1}.png`)}
                    id={this.props.pokemon.id}
                    name={this.props.pokemon.name}
                    date={this.props.pokemon.date}
                />         
            </div>
        )
    }
}

export default PokeCard;