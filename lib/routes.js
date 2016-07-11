// import React from 'react';
// import  { DefaultRoute, NotFoundRoute, Route} from 'react-router';
// import Loading from '../src/js/components/loading.jsx';


// export default [
//     <Route path="/" handler={Loading}>
//     </Route>
// ];

import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Root from '../src/js/components/root.jsx';
import App from '../src/js/components/app.jsx';
import Loading from '../src/js/components/loading.jsx';
import About from '../src/js/components/about.jsx';
import Horchata from '../src/js/containers/horchata__list.js';
import Row from '../src/js/components/row.jsx';

const Routes = [
    <Route path="/" component={App}>
    <IndexRoute component={Horchata} /> 
    <Route path="horchatas" component={Horchata} />
    <Route path="horchatas/:id" component={Horchata} />
    <Route path="about" component={About} />
    <Route path="*" component={Loading} />
    </Route>
];

export default Routes;
