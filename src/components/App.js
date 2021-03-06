import React from 'react';
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';
import Recipe from './Recipe';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            favorites: [],
        };
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

    toggleFavorite = id => {
        this.setState(({ favorites, ...state }) => {
            const idx = favorites.indexOf(id);
            if (idx !== -1) {
                return { ...state, favorites: favorites.filter(f => f !== id) };
            }

            return { ...state, favorites: [...favorites, id] };
        });
    }

    render() {
        return (
            <BrowserRouter>
                <main>
                    <Header />
                    <Switch>
                        <Redirect from="/home" to="/" />
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Home
                                    state={this.state}
                                    toggleFavorite={this.toggleFavorite}
                                />
                            )}
                        />

                        <Route
                            path="/favorites"
                            render={() => (
                                <Favorites
                                    state={this.state}
                                    toggleFavorite={this.toggleFavorite}
                                />
                            )}
                        />
                        <Route
                            path="/recipe/:id"
                            component={Recipe}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
