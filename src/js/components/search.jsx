import React, { PropTypes, Component } from 'react';

class Search extends Component {
    render() {
        const { filterVal, onSearchUpdate } = this.props
        return (
            <form className="search">
                <input 
                    type='text'
                    ref='filterInput'
                    placeholder='Type to filter..'
                    value={filterVal}
                    onChange={() => {
                        onSearchUpdate(this.refs.filterInput.value)
                    }}
                /> 
            </form>
        )
    }
}

Search.propTypes = {

};

export default Search;
