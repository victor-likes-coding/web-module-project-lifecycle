import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.todos?.length &&
                    this.props.todos?.map((todo) => (
                        <Todo
                            todo={todo}
                            key={todo.id}
                        />
                    ))}
            </div>
        );
    }
}
