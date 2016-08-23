import { connect } from 'react-redux';
import search from '../components/search.jsx';
import { setNameFilter, filterItems } from '../actions/actions';

const mapStateToProps = (state) => {
    const { visibleItems, nameFilter } = state;
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearchUpdate: (filter) => {
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
