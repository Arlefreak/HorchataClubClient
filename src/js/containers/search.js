import { connect } from 'react-redux';
import search from '../components/search.jsx';
import { setNameFilter, filterItems } from '../actions/actions';
import { Router, browserHistory } from 'react-router';

const mapStateToProps = (state) => {
    const { visibleItems, nameFilter } = state;
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    var currentLocation = ownProps;
    console.log(browserHistory);
    return {
        onSearchUpdate: (filter) => {
            // TODO: Check current url and if != home change it if not leave it
            // if(filter && filter != ''){
            //     browserHistory.push('/');
            // }
            dispatch(setNameFilter(filter));
            dispatch(filterItems());
        }
    };

};

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(search);

export default Search;
