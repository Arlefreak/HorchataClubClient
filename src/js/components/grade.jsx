/*eslint camelcase: 0*/
import React, { PropTypes } from 'react';
import emoji from 'react-easy-emoji'
import Isvg from 'react-inlinesvg';


const Grade = ({
    grade
}) => {
    var gradeEmoji = '🙅🏻'
        switch(grade){
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

    var gradeArr = [];
    for(var i = -1; i < 2; i++){
        if(i < grade){
            gradeArr.push(
                <Isvg key={i} className="filled" src={require('../../img/star.svg')}>
                    <img src="{require('../../img/star.svg')}"></img>
                </Isvg>
            );
        }else{
            gradeArr.push(
                <Isvg key={i} className="not__filled" src={require('../../img/star.svg')}>
                    <img src="{require('../../img/star.svg')}"></img>
                </Isvg>
            );
        }
    }


    return (
        <div className="grade">
            <ul className="stars">
                <li>
                    {		
                        gradeArr.map(function(item, i){		
                            return(		
                                item		
                            );		
                        })		
                    }
                </li>
            </ul>
            <span className="emoji">{ emoji(gradeEmoji)}</span>
        </div>
    );
};

Grade.propTypes = {
    grade: PropTypes.number.isRequired,
};

export default Grade;
