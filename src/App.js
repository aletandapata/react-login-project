import React, { Component } from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      keylist: {
        ali: "p9w",
        alex: "pow123x",
        aletanda: "PRAJNA",
        demo: "demo"
      }
    };
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let keys = this.state.keylist;
    console.log(username);
    for (var i in keys) {
      if (i === username && keys[i] == password) {
        console.log(i + keys[i]);
        this.setState({ message: "Correct! Correct!" });
        return;
      } else {
        console.log(i + keys[i] + "incorrecto");
        this.setState({ message: "Wrong! Wrong!" });
        // return; with this statement the code breaks
      }
    }
  }

  render() {
    return (
      <div>
        <form className="login-card" onSubmit={this.checkLogin}>
          <h1>Please enter your credentials</h1>
          Username:{" "}
          <input
            type="text"
            placeholder="Enter Username"
            required
            ref="username"
          />{" "}
          Password:{" "}
          <input ref="password" type="text" placeholder="Enter Password" />
          <input type="Submit" value="Send" />
          <p> {this.state.message} </p>
        </form>
      </div>
    );
  }
}

export default App;
