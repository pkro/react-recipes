import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = props => (
    <div style={props.style}>
        <h2 className="h2">RecipeList</h2>
        <ul className="list-reset">
            {props.recipes.map(recipe => (
                <li
                    key={recipe.id}
                    onClick={e => {
                        e.stopPropagation();
                        props.onClick(recipe.id)}
                    }
                    className="py2 border-bottom border-bottom-dashed pointer"
                >
                    <span 
                        className="mr1"
                        role="img"
                        aria-label="favorite checkbox"
                        onClick={() => props.onFavorited(recipe.id)}>
                        {props.favorites.indexOf(recipe.id) !== -1 ? '\u2705' : '🔲'}
                    </span>
                    <span>{recipe.name}</span>
                    <span>{recipe.category}</span>
                </li>
            ))}
        </ul>
    </div>
);

RecipeList.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
    onFavorited: PropTypes.func,
    recipes: PropTypes.object,
    favorites: PropTypes.array,
};

export default RecipeList;
