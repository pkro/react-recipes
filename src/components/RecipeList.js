import React from 'react';

const RecipeList = (props) => {
        return (
            <div style={props.style}>
                <h2 className="h2">RecipeList</h2>
                <ul className="list-reset">                
                { props.recipes.map( (recipe, idx) => {
                    return (
                        <li key={recipe.id} 
                            onClick={() => props.onClick(recipe.id)}
                            className="py2 border-bottom border-bottom-dashed pointer">
                            <span>{recipe.name}</span>
                            <span>{recipe.category}</span>
                        </li>
                    )
                }) }

                </ul>
            </div>
        )
}

export default RecipeList;