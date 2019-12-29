import React from 'react';

const RecipeList = (props) => {
        return (
            <div style={props.style}>
                <h2>RecipeList</h2>
                <ul>
                    <li>
                        <span>Recipe 1</span>
                        <span>Desserts</span>
                    </li>
                    <li>
                        <span>Recipe 2</span>
                        <span>Main course</span>
                    </li>
                    <li>
                        <span>Recipe 3</span>
                        <span>Desserts</span>
                    </li>
                </ul>
            </div>
        )
}

export default RecipeList;