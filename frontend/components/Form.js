import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
    };

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button type="submit">Add Todo</button>
                <button>{this.props.showCompleted ? "Hide" : "Show"} Completed</button>
            </form>
        );
    }
}
