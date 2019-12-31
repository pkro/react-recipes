import React from 'react';
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';

const App = () => (
    <BrowserRouter>
        <Route path="/" component={Home} />
    </BrowserRouter>
);

export default App;
