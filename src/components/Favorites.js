import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

const Favorites = ({ state, toggleFavorite }) => (
    <div className="px4">
        <h2 className="h2">Favorites</h2>
        <RecipeList
            recipes={state.recipes.filter(f => state.favorites.includes(f.id))}
            favorites={state.favorites}
            onFavorited={toggleFavorite}
            // toDo: onClick handler to redirect to /recipe/:id
        />
    </div>
);

Favorites.propTypes = {
    state: PropTypes.object,
    toggleFavorite: PropTypes.func,
};

export default Favorites;
