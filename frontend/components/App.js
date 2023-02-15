import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    addTodo = (todo) => {
        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        })
            .then((response) => response.json())
            .then(({ data }) => this.setState({ todos: [...this.state.todos, data] }));
    };

    componentDidMount() {
        fetch(URL)
            .then((response) => response.json())
            .then(({ data }) => this.setState({ todos: data }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.todos.length !== this.state.todos.length;
    }

    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
                <Form addTodo={this.addTodo} />
            </div>
        );
    }
}
