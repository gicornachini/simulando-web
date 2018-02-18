import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import FreeQuestion from "./components/FreeQuestion";

// TODO: Estruturar componentes em arquivos diferentes
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  showQuestions(questions) {
    this.setState({ questions: questions });
  }

  search(URL) {
    axios
      .get(URL)
      .then(response => {
        this.showQuestions(response.data);
      })
      .catch(error => {
        console.log("Fetch Error :-S", error);
      });
  }

  componentDidMount() {
    this.search("/api/v1/questions/");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <FreeQuestion questions={this.state.questions} />
        </div>
      </div>
    );
  }
}

export default App;
