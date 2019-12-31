import React from 'react';
// import Logo from '../static/images/pkro.png';
import { NavLink } from 'react-router-dom';

// <img src={Logo} />

const Header = () => (
    <header className="flex items-center justify-between px4">
        <h1 className="h1">
            <span role="img" aria-label="food emoji">
                🍲
            </span>
            MyRecipes
        </h1>
        <nav>
            <NavLink
                exact
                to="/"
                className="p1 mx2 black text-decoration-none rounded"
                activeClassName="bg-white">
                Home
            </NavLink>
            <NavLink
                exact
                to="/favorites"
                className="p1 mx2 black text-decoration-none rounded"
                activeClassName="bg-white">
                Favorites
            </NavLink>
        </nav>
    </header>
);

export default Header;
