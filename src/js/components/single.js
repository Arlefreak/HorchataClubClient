React = require("react");

TodoListComponent = React.createClass({
    handleTodoDelete: function() {
        return TodoDispatcher.dispatch({
            actionType: "todo-delete",
            todo: this.props.todoItem
        });
    },
    componentDidMount: function() {
        return this.props.TodoStore.on("add remove reset", (function(_this) {
            return function() {
                return _this.forceUpdate();
            };
        })(this), this);
    },
    componentWillUnmount: function() {
        return this.props.TodoStore.off(null, null, this);
    },
    render: function() {
        return React.DOM.ul({}, this.props.TodoStore.items.map(function(todoItem) {
            return TodoItemComponent({
                todoItem: todoItem
            });
        }));
    }
});

module.exports = TodoListComponent;
