/*eslint camelcase: 0*/
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import emoji from 'react-easy-emoji'
import Grade from './grade.jsx';

const Row = ({
    id,
    name,
    image,
    small_text,
    description,
    grade,
    address,
    location
}) => {
    var url = 'url(' + image + ')';
    var style = {
        backgroundImage: url
    };

    var locationArr = location.split(',');
    var googleLink = 'https://google.com/maps/?q=' + locationArr[0] + ',' + locationArr[1];

    return (
        <li className="row">
            <div className="card">
                <Link to={`/horchatas/${id}`}>
                    <img className="horchata__img" src={ image }></img>
                </Link>
                <div className="horchata__body">
                    <h3>
                        <Link to={`/horchatas/${id}`}>
                            {name}
                        </Link>
                    </h3>
                    <Grade grade={grade}></Grade>
                    <div className="description">
                        <p>{small_text}</p>
                    </div>
                    <div className="address">
                        <a href={googleLink} target="_blank">{address}</a>
                    </div>
                </div>
            </div>
        </li>
    );
};

Row.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    small_text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};

export default Row;
