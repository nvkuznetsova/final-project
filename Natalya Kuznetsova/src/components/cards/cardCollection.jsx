import React from 'react';
import BtnLink from '../buttons/btnLink';
import ImageLink from '../cards-body/imgLink';
import TextName from '../cards-body/textName';
import TextCaught from '../cards-body/textCaught';

const CardCollection = (props) => {
    return(
        <div className="card bg-light mb-3 border-success shadow-sm">
            <ImageLink link={props.link} src={props.src}/>
            <div className="card-body">
                <TextName id={props.pokemon.pokemonId} name={props.pokemon.name}/>
                <TextCaught date={props.pokemon.date}/>
                <BtnLink link={props.link} />
            </div>
        </div>
    )
}

export default CardCollection;