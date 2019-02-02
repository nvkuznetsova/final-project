import React from 'react';
import { Link } from 'react-router-dom';
import Image from './image';

const ImageLink = (props) => {
    return(
        <Link to={props.link} >
            <Image src={props.src} class="pokeImg"/>
        </Link>
    )
}

export default ImageLink;