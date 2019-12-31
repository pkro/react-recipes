import React from 'react';
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';

const App = () => (
    <BrowserRouter>
        <main>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </BrowserRouter>
);

export default App;
