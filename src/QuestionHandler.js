import React, { Component } from 'react';
import UnansweredPoll from './UnansweredPoll';
import CompletedPoll from './CompletedPoll';
import {matchPath} from 'react-router-dom';

class QuestionHandler extends Component {

    isQuestionCompletedByUser = (user, question) => {

        console.log('QuestionId: ', question.question_id)

        var answers = Object.keys(user.answers);

        console.log('Answers: ', answers)

        var returnValue = answers.includes(question.question_id);

        console.log("ReturnValue: ", returnValue);

        return returnValue;
      }


    render() {
        
        var pathname = window.location.pathname;

        console.log("Pathname: ", pathname);

        var questions = this.props.questions;

        console.log("Questions: ", questions);

        var user = this.props.user;

        console.log("User: ", user);

        const getQuestionFromPath = pathname => {
            const matchProfile = matchPath(pathname, {
              path: `/questions/:question_id`,
            });
            return (matchProfile && matchProfile.params) || {};
          };

        var question = getQuestionFromPath(window.location.pathname);

        return (
            (this.isQuestionCompletedByUser(user, question))
            ?
            (<CompletedPoll 
                user = {user}
                question = {this.props.questions[question.question_id]}
                />)
            : 
            (<UnansweredPoll 
                user = {user}
                question = {this.props.questions[question.question_id]}
                onAnswerSubmitted = {this.props.onAnswerSubmitted}
                />
            )
        );
    }
}

export default QuestionHandler;