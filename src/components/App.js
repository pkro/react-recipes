import React from 'react';
import Logo from '../static/images/pkro.png'

import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

const App = () => {
        return (
            <div>
                <Header />
                <main style={{display: 'flex'}}>
                    <RecipeList />
                    <RecipeDetail />
                </main>
            </div>
        )
}

export default App;