import React from 'react';
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Favorites from './Favorites';

const App = () => (
    <BrowserRouter>
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favorites} />
        </main>
    </BrowserRouter>
);

export default App;
