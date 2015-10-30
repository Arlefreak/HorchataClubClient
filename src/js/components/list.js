"use strict";

var $ = window.$;
var React = window.React;

module.exports = React.createClass({
    displayName: 'List',
    render: function() {
        return (
            React.createElement('div', {
                    id: "horchataList"
                },
                "This is a list"
            )
        );
    }
});
