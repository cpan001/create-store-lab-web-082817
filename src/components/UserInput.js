import React, { Component } from "react";

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  };

  handleChange = e => {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ hometown: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({ type: "ADD_USER", user: this.state });
    this.setState({ username: "", hometown: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Username:{" "}
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </p>
          <p>
            Hometown:{" "}
            <input
              name="hometown"
              type="text"
              value={this.state.hometown}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" value="Add User" />
        </form>
      </div>
    );
  }
}

export default UserInput;
