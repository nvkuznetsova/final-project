import React from 'react';
import BtnDisabled from '../buttons/btnDisabled';
import BtnCatch from '../buttons/btnCatch';
import ImageLink from '../cards-body/imgLink';
import TextName from '../cards-body/textName';

const CardAll = (props) => {
    return (
        <div className="card bg-light mb-3 border-primary shadow mx-auto" >
            <ImageLink link={props.link} src={props.src}/>
            <div className="card-body">
                <TextName id={props.pokemon.id} name={props.pokemon.name}/>
                {(props.pokemon.caught.length > 0) ? 
                    <BtnDisabled />
                :
                    <BtnCatch onClick={props.click} />
                }
            </div>
        </div>
    )
}

export default CardAll;