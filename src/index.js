import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './assets/css/project.css';

import Main from './components/Main';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/a26c1fc1-37e9-4f89-8ca2-01165c2367b1" component={Main} />
            <Redirect from="/" to="/a26c1fc1-37e9-4f89-8ca2-01165c2367b1" />
        </Switch>
    </BrowserRouter>, 
document.getElementById('root'));

//serviceWorker.unregister();
