import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.todo.completed !== this.props.todo.completed;
    }

    render() {
        return (
            <div onClick={() => this.props.completeTodo(this.props.todo.id)}>
                {this.props.todo.name} {this.props.todo.completed && "✅"}
            </div>
        );
    }
}
