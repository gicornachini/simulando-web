import React, { Component } from "react";
import Question from "./Question";

class FreeQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.showNextQuestion = this.showNextQuestion.bind(this);
  }

  showNextQuestion() {
    this.setState({ index: this.state.index + 1 });
  }

  render() {
    const index = this.state.index
    const questions = this.props.questions
    const question = questions[index]

    if (!questions) {
      return null
    }

    if(!question) {
      return <div className="FreeQuestion">
          <h1>FIM</h1>
        </div>
    }

    return <div className="FreeQuestion"><Question
      index={index + 1}
      key={question.id}
      id={question.id}
      questionAlternatives={question.question_choices}
      text={question.text}
      />
      <button onClick={this.showNextQuestion}>next</button>
      </div>;
  }
}

export default FreeQuestion;
