import React, { PropTypes } from 'react';
import Row from './row.jsx';
import Loading from './loading.jsx';

const List = ({ items, isFetching }) => {
    if(!isFetching){
        return (
            <ul className="horchata-list">
                {
                    items.map( item =>
                        <Row
                            key={item.id}
                            {...item}
                            onClick={() => console.log('clicked')}
                        />
                        )
                }
            </ul>
        );
    }else{
        return(<Loading/>);
    }
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    isFetching: PropTypes.bool
};

export default List;
