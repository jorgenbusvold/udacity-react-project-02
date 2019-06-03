import React, { Component } from 'react';
import UnansweredPoll from './UnansweredPoll';
import CompletedPoll from './CompletedPoll';
import {matchPath} from 'react-router-dom';
import {connect}  from 'react-redux';

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
        
        const user = this.props.authenticatedUser;

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
              (<CompletedPoll  questionId = {question.question_id}/>)
            : 
              (<UnansweredPoll questionId = {question.question_id}/>
            )
        );
    }
}

function mapStateToProps({authenticatedUser}){
  return {
    authenticatedUser,
  }
}

export default connect(mapStateToProps)(QuestionHandler);