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
                    <Search></Search>
                    <nav>
                        <ul>
                            <li><Link to="/about" activeClassName="active">About</Link></li>
                        </ul>
                    </nav>
                    <ul className="social">
                        <li><a href="https://instagram.com/horchataclub/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/horchataclub" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="mailto:horchataclub@gmail.com" target="_blank"><i className="fa fa-envelope-o"></i></a></li>
                        <li><a href="https://twitter.com/horchata_club" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://github.com/Arlefreak/HorchataClubClient" target="_blank"><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
