import React from "react";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button type="submit">Add Todo</button>
                <button>{this.props.showCompleted ? "Hide" : "Show"} Completed</button>
            </form>
        );
    }
}
