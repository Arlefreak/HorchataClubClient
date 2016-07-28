import { connect } from 'react-redux';
import List from '../components/list.jsx';
import { apiFetchIfNeeded } from '../actions/actions';

const mapStateToProps = (state) => {
    const { apiCalls } = state;
    const {
        isFetching,
        items
    } = apiCalls['horchata'] || {
        isFetching: true,
        items: []
    };

    return {
        isFetching,
        items
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
