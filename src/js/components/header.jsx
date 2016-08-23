import React from 'react';
import { Link, IndexLink } from 'react-router';
import Search from '../containers/search';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <IndexLink to="/" className="logo" activeClassName="active">
                        <img src={require('../../img/logo.svg')} alt="HORCHATACLUB"/>
                    </IndexLink>
                    <nav>
                        <ul>
                            <li><Link to="/about" activeClassName="active">About</Link></li>
                        </ul>
                    </nav>
                    <Search></Search>
                </div>
            </header>
        );
    }
}

export default Header;
