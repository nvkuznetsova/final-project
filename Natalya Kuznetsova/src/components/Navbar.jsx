//Router component here
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-light bg-light sticky-top shadow-sm">
            <Link to='/' className="navbar-brand font-weight-bold text-danger">
                <img className="logo" src="../../img/ball.png" alt="logo" width="30" height="30"/>
                Pokedex
            </Link>
            <div className="d-flex flex-row">
                <div className="nav nav-tabs">
                    <NavLink exact to='/' className="nav-item nav-link" activeClassName='active'>Pokemons</NavLink>
                    <NavLink to='/collection' className="nav-item nav-link" activeClassName='active'>Collection</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;