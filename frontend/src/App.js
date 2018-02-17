import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// TODO: Colocar em um utils.js ou algo do tipo
export function createMarkup(htmlText) {
    return {__html: htmlText};
  }


// TODO: Estruturar componentes em arquivos diferentes
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {questions: []};
    }

  showQuestions(questions) {
    this.setState({questions: questions})
  }

  search(URL) {
    axios.get(URL)
      .then((response) => {
        this.showQuestions(response.data);
      })
      .catch((error) => {
        console.log('Fetch Error :-S', error)
      })
  }

  componentDidMount(){
     this.search('/api/v1/questions/');
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

class FreeQuestion extends Component {
  render() {
    const questions = this.props.questions.map((question, index) =>
        // index começa com '0'
        <Question index={index+1} key={question.id} id={question.id} questionAlternatives={question.question_choices} text={question.text} />
      );
    return(
      <div className='FreeQuestion'>
        {questions}
      </div>
      )
  }
}

class Question extends Component {

  render() {
    const questionAlternatives = this.props.questionAlternatives.map((alternative) =>
      <QuestionAlternative key={alternative.id} text={alternative.text} />
      );
    return (
      <div>
      <h2>{this.props.index})</h2>
        <div dangerouslySetInnerHTML={createMarkup(this.props.text)} />
        <ul>
          {questionAlternatives}
        </ul>
      </div>
      )
  }
}

class QuestionAlternative extends Component {
  render() {
    return (
        <li>A) {this.props.text}</li>
      );
  }
}

export default App;
