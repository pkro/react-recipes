import React from 'react';
// import Logo from '../static/images/pkro.png';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRecipe: null,
        };

        // this.onRecipeClick = this.onRecipeClick.bind(this);
        // otherwise, "this" is not bound to the class but to the RecipeList component
        // Workaround: define onRecipeClick as an arrow function and install babel-preset-stage-0
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
        const { recipes, favorites } = this.props.state;
        const { currentRecipe } = this.state;
        return (
            <div>
                <main className="px4 flex">
                    <div style={{ flex: 3 }}>
                        <h2 className="h2">RecipeList</h2>
                        <RecipeList
                            style={{ flex: 3 }}
                            recipes={recipes}
                            favorites={favorites}
                            onClick={this.onRecipeClick}
                            onFavorited={this.props.toggleFavorite}
                        />
                    </div>
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

Home.propTypes = {
    recipes: PropTypes.object,
    favorites: PropTypes.array,
    state: PropTypes.object,
    toggleFavorite: PropTypes.func,
};

export default Home;
