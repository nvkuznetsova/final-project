import React from 'react';
import { Link } from 'react-router-dom';

const BtnLink = (props) => {
    return (
        <Link to={props.link} className="btn btn-success btn-block btn-lg">See my card!</Link>
    )
}

export default BtnLink;