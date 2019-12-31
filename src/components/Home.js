import React from 'react';
// import Logo from '../static/images/pkro.png';

import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            currentRecipe: null,
        };

        // this.onRecipeClick = this.onRecipeClick.bind(this);
        // otherwise, "this" is not bound to the class but to the RecipeList component
        // Workaround: define onRecipeClick as an arrow function and install babel-preset-stage-0
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    recipes: json,
                }); // shortcut: .then(recipes => this.setState({ recipes }));
            });
    }

    onRecipeClick = id => {
        fetch(`${API_URL}/v1/recipes/${id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    currentRecipe: json,
                });
            });
    };

    render() {
        const { recipes, currentRecipe } = this.state; // es6 object copy
        return (
            <div>
                <Header />
                <main className="px4 flex">
                    <RecipeList
                        style={{ flex: 3 }}
                        recipes={recipes}
                        onClick={this.onRecipeClick}
                    />
                    <RecipeDetail
                        className="ml4"
                        style={{ flex: 5 }}
                        recipe={currentRecipe}
                    />
                </main>
            </div>
        );
    }
}

export default Home;
