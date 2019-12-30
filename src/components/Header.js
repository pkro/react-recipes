import React from 'react';
import Logo from '../static/images/pkro.png'

const Header = () => {
        return (
            <header>
                <img src={Logo} />
                <h1 className="red">MyRecipes</h1>
            </header>
        )
}

export default Header;