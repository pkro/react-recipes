import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({
    style,
    favorites,
    recipes,
    ...props
}) => (
    <ul className="list-reset">
        {recipes.map(recipe => (
            <RecipeListItem
                recipe={recipe}
                favorited={favorites.indexOf(recipe.id) !== -1}
                onClick={props.onClick}
                onFavorited={props.onFavorited}
            />
        ))}
    </ul>
);

RecipeList.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
    onFavorited: PropTypes.func,
    recipes: PropTypes.object,
    favorites: PropTypes.array,
};

export default RecipeList;
