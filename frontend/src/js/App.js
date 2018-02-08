import React, { Component } from "react";
import "../css/App.css";

const API = 'http://www.json-generator.com/endpoint/json/get/cuInEjYfsi?indent=2';
const DEFAULT_QUERY = 'redux';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ questions: data.questions }));
  }
  render() {
    const { questions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Wrap-questions">
          {questions.map(question =>
            <div key={question.objectID}>
              <a href={question.url}>{question.title}</a>
            </div>
          )}
        </div>
      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
