import React from 'react';
import Logo from '../static/images/pkro.png'

import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

fetch('http://reactrecipes.herokuapp.com/v1/recipes')
.then(res => res.json())
.then(json => console.log(json));

const App = () => {
        return (
            <div>
                <Header />
                <main style={{display: 'flex'}}>
                    <RecipeList style={{flex: 3}}/>
                    <RecipeDetail style={{flex: 5}} />
                </main>
            </div>
        )
}

export default App;