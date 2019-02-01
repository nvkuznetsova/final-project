//describe pokemon here
import React, { Component } from 'react';
import { getPokemon } from '../../routes/routes';

class PokeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            date: ''
        }
    }

    componentDidMount(){
        this.getPoke(this.props.match.params.id);
    }

    getPoke(id) {
        getPokemon(id).then(data => {
            this.setState({
                id: data.id,
                name: data.name
            });

            return data.caught;
        }).then(caught => {
            if (caught.length === 0) {
                return
            } else {
                this.setState({
                    date: caught[0].date
                });
            }
        });  
    }

    render() {
        return(
            <div className="col-sm-12 col-md-6 mx-auto">
                <h3 className="text-md-left text-sm-center mt-3 mb-3">Pokemon Card</h3>
                <div className="card bg-light mb-3 border-info mx-auto shadow" >
                    <img className="card-img-top mx-auto d-block img-fluid" src={(`../../pokemons/${(this.state.id <= 720) ? this.state.id : this.state.id%100+1}.png`)} alt="pokemon" />
                    <div className="card-body">
                        <p className="card-text text-capitalize">#{this.state.id} {this.state.name}</p>
                        {(this.state.date !== '') ? 
                            <p className="card-text text-capitalize text-info">Caught: {this.state.date}</p>
                            :
                            <p className="card-text text-capitalize text-danger">Not caught yet)</p>
                        }       
                    </div>
                </div>               
            </div>
        )
    }
}

export default PokeCard;