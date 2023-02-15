import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div onClick={() => this.props.completeTodo(this.props.id)}>{this.props.todo.name}</div>;
    }
}
