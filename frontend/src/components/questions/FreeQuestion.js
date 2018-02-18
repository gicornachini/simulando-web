import React, { Component } from "react";
import Question from "./Question";

class FreeQuestion extends Component {
  render() {
    const questions = this.props.questions.map((question, index) => (
      // index começa com '0'
      <Question
        index={index + 1}
        key={question.id}
        id={question.id}
        questionAlternatives={question.question_choices}
        text={question.text}
      />
    ));
    return <div className="FreeQuestion">{questions}</div>;
  }
}

export default FreeQuestion;
