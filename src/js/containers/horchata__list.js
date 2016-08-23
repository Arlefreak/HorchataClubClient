import { connect } from 'react-redux';
import List from '../components/list.jsx';
import { apiFetchIfNeeded } from '../actions/actions';

const mapStateToProps = (state) => {
    const { apiCalls, visibleItems, nameFilter } = state;
    const {
        isFetching,
        items
    } = apiCalls['horchata'] || {
        isFetching: true,
        items: []
    };

    let filteredItems = visibleItems;
    if(visibleItems.length === 0 && nameFilter.filter  === ''){
        filteredItems = items;
    }

    return {
        isFetching,
        items: filteredItems
    };
};

const mapDispatchToProps = (dispatch) => {
    dispatch(apiFetchIfNeeded('horchata'));
    return {};
};

const HorchataList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default HorchataList;
