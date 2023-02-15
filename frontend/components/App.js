import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            showCompleted: false,
        };
    }

    updateCompletedView = (e) => {
        e.preventDefault();
        this.setState({ showCompleted: !this.state.showCompleted });
    };

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

    completeTodo = (id) => {
        fetch(`${URL}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then(({ data }) => {
                const todos = this.state.todos.map((todo) => {
                    if (todo.id === data.id) {
                        return data;
                    }
                    return todo;
                });
                this.setState({ todos });
            });
    };

    componentDidMount() {
        fetch(URL)
            .then((response) => response.json())
            .then(({ data }) => this.setState({ todos: data }));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextState.todos.length !== this.state.todos.length ||
            nextState.todos.some((todo, i) => todo.completed !== this.state.todos[i].completed) ||
            nextState.showCompleted !== this.state.showCompleted
        );
    }

    render() {
        return (
            <div>
                <TodoList
                    todos={this.state.todos}
                    completeTodo={this.completeTodo}
                />
                <Form addTodo={this.addTodo} />
            </div>
        );
    }
}
