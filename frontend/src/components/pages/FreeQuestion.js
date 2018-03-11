import React, { Component } from "react";

import Question from "../questions/Question";
import ProgressBar from "../utils/ProgressBar";

import axios from "axios";

class FreeQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      questions: [],
    };

    this.showNextQuestion = this.showNextQuestion.bind(this);
  }

  componentDidMount() {
    this.getFreeQuestions("/api/v1/questions/");
  }

  getFreeQuestions(URL) {
    axios
      .get(URL)
      .then(response => {
        this.showQuestions(response.data);
      })
      .catch(error => {
        console.log("Fetch Error :-S", error);
      });
  }

  showQuestions(questions) {
    this.setState({ questions: questions });
  }

  showNextQuestion() {
    const nextIndex = this.state.index + 1
    this.setState({
      index: nextIndex,
    });
  }

  render() {
    const index = this.state.index
    const questions = this.state.questions

    if (!questions.length) {
      return (
        <div>Loading...</div>
        )
    }

    const question = questions[index]
    if(!question) {
      return <div className="FreeQuestion">
              <h1>FIM</h1>
            </div>
    }

    return <div className="FreeQuestion">
                <ProgressBar actualIndex={this.state.index}
                             maxIndex={this.state.questions.length}/>
                <Question
                  index={index + 1}
                  key={question.id}
                  id={question.id}
                  questionAlternatives={question.question_choices}
                  text={question.text}
                  correctChoiceId={question.correct_choice}
                  showNextQuestion={this.showNextQuestion}
                  />
      </div>;
  }
}

export default FreeQuestion;
