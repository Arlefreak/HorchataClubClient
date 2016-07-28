import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Root from './root.jsx';
import Loading from './loading.jsx';
import About from './about.jsx';
import Horchata from '../containers/horchata__list.js';
import Single from '../containers/horchata__single.js';

class Routes extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route path="/" component={Root}>
                    <IndexRoute component={Horchata} /> 
                    <Route path="horchatas" component={Horchata} />
                    <Route path="horchatas/:id" component={Single} />
                    <Route path="about" component={About} />
                    <Route path="*" component={Loading} />
                </Route>
            </Router>
        );
    }
}

export default Routes;
