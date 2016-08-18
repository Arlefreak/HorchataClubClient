import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="wrapper">
                    <IndexLink to="/" className="logo" activeClassName="active">
                        <img src="/public/img/logo.svg" alt="HORCHATACLUB"/>
                    </IndexLink>
                    <nav>
                        <ul>
                            <li><Link to="/about" activeClassName="active">About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
