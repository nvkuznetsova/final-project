import React from 'react';

const TextName = (props) => {
    return (
        <p className="card-text text-capitalize">#{props.id} {props.name}</p>
    )
}

export default TextName;