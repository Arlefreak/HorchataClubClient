/*eslint camelcase: 0*/
import { connect } from 'react-redux';
import Single from '../components/single.jsx';
import { apiFetchIfNeeded } from '../actions/actions';

const mapStateToProps = (state, ownProps ) => {
    const {id } = ownProps.params;
    const { apiCalls } = state;

    const {
        isFetching,
        items
    } = apiCalls['horchata'] || {
        isFetching: true,
        items: []
    };

    let single = {
        id: 0,
        name: 'Not Found',
        image: '',
        small_text: 'Err 404',
        description: 'Err 404',
        grade: 0,
        address: '/404',
        location: ''
    };

    var i = 0;
    for(i; i < items.length; i++){
        if (items[i].id === parseInt(id)){
            single = items[i];
            break;
        }
    }

    return {
        isFetching,
        single
    };
};

const mapDispatchToProps = (dispatch) => {
    dispatch(apiFetchIfNeeded('horchata'));
    return {};
};

const HosrchataSingle = connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);

export default HosrchataSingle;
