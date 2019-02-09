import React from 'react';
import Image from '../cards-body/image';
import TextName from '../cards-body/textName';
import TextCaught from '../cards-body/textCaught';

const CardInfo = (props) => {
    return (
        <div className="card bg-light mb-3 border-info mx-auto shadow-lg" >
            <Image src={props.src} class="infoImg mx-auto"/>
            <div className="card-body">
            <TextName id={props.id} name={props.name}/>
                {(props.date !== '') ? 
                    <TextCaught date={props.date}/>
                        :
                    <p className="card-text text-capitalize text-danger">Not caught yet)</p>
                }       
            </div>
        </div>
    )
}

export default CardInfo;