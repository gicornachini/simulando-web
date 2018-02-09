import React, { Component } from "react";
import "../css/App.css";

const API = 'http://www.mocky.io/v2/5a7dc97d3100005000cd0a52?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    fetch(API)
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
            <div key={question.pk}>
              {/* pelo nome e perigoso usar hehehe */}
              <div dangerouslySetInnerHTML={{ __html: question.fields.text }} />
            </div>
          )
          }
        </div>

      </div>
    );
  }
}

export default App;
