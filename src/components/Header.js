import React from 'react';
// import Logo from '../static/images/pkro.png';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// <img src={Logo} />

const HeaderLink = ( { children, ...props }) => (
    <NavLink
        exact
        className="p1 mx2 black text-decoration-none rounded"
        activeClassName="bg-white"
        {...props}
    >
        {children}
    </NavLink>
);

const Header = () => (
    <header className="flex items-center justify-between px4">
        <h1 className="h1">
            <span role="img" aria-label="food emoji">
                🍲
            </span>
            MyRecipes
        </h1>
        <nav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/favorites">Favorites</HeaderLink>
        </nav>
    </header>
);

HeaderLink.propTypes = {
    children: PropTypes.node,
}

export default Header;
