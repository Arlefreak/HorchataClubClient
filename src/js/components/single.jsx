/*eslint camelcase: 0*/
/*eslint react/no-danger: 0*/

import React, { PropTypes } from 'react';
import emoji from 'react-easy-emoji'

function createMarkup(s) { return {__html: s}; };

const Single = ({
    isFetching,
    single
}) => {
    var url = 'url(' + single.image + ')';
    // var url = 'url()';
    var style = {
        backgroundImage: url
    };

    var gradeEmoji = '🙅🏻';
        switch(single.grade){
            case 0:
                gradeEmoji = '🙅';
                break;
            case 1:
                gradeEmoji = '🙎';
                break;
            case 2:
                gradeEmoji = '💁';
                break;
            default:
                gradeEmoji = '🙅';
                break;
        }

    var locationArr = single.location.split(',');
    var googleLink = 'https://google.com/maps/?q=' + locationArr[0] + ',' + locationArr[1];
    var mapLink = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBWxPXR1jBEg97WE1X_zpcGZPzmDxOiqS4&q=' + locationArr[0] + ',' + locationArr[1];
    {/* var mapLink = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + locationArr[0] + ',' + locationArr[1] +  '&radius=5000&sensor=true&key=AIzaSyBNoofXBA50Y9SGLbZ1JxBsnvSEoUcnUiA'; */}

    return (
        <div className="single card">
            <img className="horchata__img" src={single.image}></img>
            <div className="horchata__body">
                <h3>{single.name}</h3>
                <span className="grade">{ emoji(gradeEmoji)}</span>
                <div className="description">
                    <div dangerouslySetInnerHTML={createMarkup(single.description)} />
                </div>
                <div className="address">
                    <a href={googleLink} target="_blank">{single.address}</a>
                </div>
            </div>
            <div className="horchata__map">
                <iframe
                    frameBorder="0"
                    src={mapLink}
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

Single.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    single: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        small_text: PropTypes.string.isRequired,
        grade: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired
};

export default Single;
