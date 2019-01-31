//Router component here
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar sticky-top bg-light">
            <Link to='/' className="navbar-brand font-weight-bold text-danger">
                <img className="logo" src="../../img/ball.png" alt="logo" width="30" height="30"/>
                Pokedex
            </Link>
            <div className="d-flex flex-row">
                <div className="nav nav-tabs">
                    <NavLink exact to='/' className="nav-item nav-link" activeClassName='activeLink'>Pokemons</NavLink>
                    <NavLink to='/collection' className="nav-item nav-link" activeClassName='activeLink'>Collection</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;