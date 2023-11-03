import React, { Component } from "react";
import "./App.css";
import TableData from "./components/Table";
import FormData from "./components/Form";
class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      city: "",
      mobile: "",
      items: [],
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    let items = [...this.state.items];

    items.push({
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      mobile: this.state.mobile,
    });

    this.setState({
      items,
      name: "",
      email: "",
      city: "",
      mobile: "",
    });
  };

  handleChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <FormData
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={this.state.name}
          email={this.state.email}
          city={this.state.city}
          mobile={this.state.mobile}
        />
        <TableData items={this.state.items} />
      </div>
    );
  }
}

export default App;
