import React from 'react';

const Image = (props) => {
    return(
        <img className={"card-img-top img-fluid "+props.class} src={props.src} alt="pokemon" />
    )
}

export default Image;