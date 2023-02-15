import React from "react";

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
            .then((data) => this.setState({ todos: data }));
    }
    render() {
        console.log(this.state.todos);
        return null;
    }
}
