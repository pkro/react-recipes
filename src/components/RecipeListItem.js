import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({
    recipe,
    favorited,
    onClick,
    onFavorited,
}) => (
    <li
        key={recipe.id}
        onClick={e => {
            e.stopPropagation();
            onClick(recipe.id);
        }}
        className="py2 border-bottom border-bottom-dashed pointer"
    >
        <span
            className="mr1"
            role="img"
            aria-label="favorite checkbox"
            onClick={() => onFavorited(recipe.id)}
        >
            {favorited ? '\u2705' : '🔲'}
        </span>
        <span>{recipe.name}</span>
        <span>{recipe.category}</span>
    </li>
);


RecipeListItem.propTypes = {

    recipe: PropTypes.object,
    onClick: PropTypes.func,
    onFavorited: PropTypes.func,
    favorited: PropTypes.bool,
};

export default RecipeListItem;
