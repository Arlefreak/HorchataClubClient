/*eslint camelcase: 0*/
import React, { PropTypes } from 'react';

const Row = ({
    id,
    name,
    image,
    small_text,
    grade
}) => {
    var url = 'url(' + image + ')';
    // var url = 'url()';
    var style = {
        backgroundImage: url
    };

    var gradeArr = [];
    for(var i = 0; i < grade; i++){
        gradeArr.push(<i key={i} className="fa fa-star"/>);
    }

    return (
        <div className="row card">
            <div className="horchata__img" style={style}></div>
            <div className="horchata__body">
                <h3>{name}</h3>
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
                    <a href="">{name}</a>
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
    grade: PropTypes.number.isRequired

};

export default Row;
