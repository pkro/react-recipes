import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RecipeDetail = props => {
  if (props.recipe === null) {
    return (
      <p
        className={classNames('h3 p2 bg-white italic center', props.className)}
        style={props.style}
      >
        Please select a recipe on the left
      </p>
    );
  }
  return (
    <div
      style={props.style}
      className={classNames('p2 bg-white', props.className)}
    >
      <h2 className="h2">{props.recipe.name}</h2>
      <img src={props.recipe.image} className="fit" alt={props.recipe.name} />
      <span>{props.recipe.category}</span>
      <span>{props.recipe.calories}</span>
      <h3>ingredients</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>steps</h3>
      <ol>
        {props.recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};
export default RecipeDetail;
