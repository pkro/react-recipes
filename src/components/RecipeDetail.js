import React from 'react';
import classNames from 'classnames';

const RecipeDetail = (props) => {
        if(props.recipe === null) {
            return (<p 
                        className={classNames('h3 p2 bg-white italic center', props.className)}
                        style={props.style}>Please select a recipe on the left</p>)
        }
        return (
            <div style={props.style}
                className={classNames('p2 bg-white', props.className)}>
                <h2 className="h2">{props.recipe.name}</h2>
                <img src={props.recipe.image} 
                    className="fit"/>
                <span>{props.recipe.category}</span>
                <span>{props.recipe.calories}</span>
                <h3>ingredients</h3>
                <ul>
                {props.recipe.ingredients.map( (ingredient, idx) => {
                    return (<li key={idx}>{ingredient}</li>);
                })}
                
                </ul>
                <h3>steps</h3>
                <ol>
                {props.recipe.steps.map( (step, idx) => {
                    return (<li key={idx}>{step}</li>);
                })}
                
                </ol>
                
            </div>
        )
}

export default RecipeDetail;