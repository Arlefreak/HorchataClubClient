import React, { Component, PropTypes } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Root from './root.jsx';
import Loading from './loading.jsx';
import About from './about.jsx';
import Horchata from '../containers/horchata__list.js';
import Row from './row.jsx';

class Routes extends Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Root}>
                    <IndexRoute component={Horchata} /> 
                    <Route path="horchatas" component={Horchata} />
                    <Route path="horchatas/:id" component={Horchata} />
                    <Route path="about" component={About} />
                    <Route path="*" component={Loading} />
                </Route>
            </Router>
        );
    }
}

export default Routes;
