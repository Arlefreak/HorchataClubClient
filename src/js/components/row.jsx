/*eslint camelcase: 0*/
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

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
    // var url = 'url()';
    var style = {
        backgroundImage: url
    };

    var gradeArr = [];
    var locationArr = location.split(',');
    var googleLink = 'https://google.com/maps/?q=' + locationArr[0] + ',' + locationArr[1];
    for(var i = 0; i < grade; i++){
        gradeArr.push(<i key={i} className="fa fa-star"/>);
    }

    return (
        <div className="row card">
            <Link to={`/horchatas/${id}`}>
                <div className="horchata__img" style={style}></div>
            </Link>
            <div className="horchata__body">
                <h3>
                    <Link to={`/horchatas/${id}`}>
                        {name}
                    </Link>
                </h3>
                <span className="grade">
                    {
                        gradeArr.map(function(item, i){
                            return(
                                item
                            );
                        })
                    }
                </span>
                <div className="description">
                    <p>{small_text}</p>
                </div>
                <div className="address">
                    <a href={googleLink} target="_blank">{address}</a>
                </div>
            </div>
        </div>
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
