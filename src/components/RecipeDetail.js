import React from 'react';

const RecipeDetail = (props) => {
        return (
            <div style={props.style}>
                <h2>Recipe1</h2>
                <img src="" />
                <span>Dessert</span>
                <span>1200kcal</span>
                <h3>ingredients</h3>
                <ul>
                    <li>i1</li>
                    <li>i2</li>
                    <li>i3</li>
                </ul>
                <h3>steps</h3>
                <ol>
                    <li>bla</li>
                    <li>blubb</li>
                    <li>bla</li>
                </ol>
                
            </div>
        )
}

export default RecipeDetail;