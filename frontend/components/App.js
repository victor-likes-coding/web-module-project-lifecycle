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

    componentDidMount() {
        fetch(URL)
            .then((response) => response.json())
            .then(({ data }) => this.setState({ todos: data }));
    }
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos} />
                <Form />
            </div>
        );
    }
}
