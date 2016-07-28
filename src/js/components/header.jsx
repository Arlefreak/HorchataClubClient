import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src="img/logo.svg" alt="HORCHATACLUB"/>
                <h1>HORCHATACLUB</h1>
                <nav>
                    <ul>
                        <li><IndexLink to="/" className="buttonInv" activeClassName="active">Horchatas</IndexLink></li>
                        <li><Link to="/about" className="buttonInv" activeClassName="active">About</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
