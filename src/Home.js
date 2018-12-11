import React, { Component } from 'react';
import './App.css';
import {getObjectArray, getAllItemsExceptFromKeys, getAllItemsWhereKeysExist} from './Helpers';
import AnsweredQuestionsList from './AnsweredQuestionsList';
import UnansweredQuestionsList from './UnansweredQuestionsList';  

class Home extends Component {

    setValue = (variable, value) => {
      variable = value;
    }

    render() {

      var user = this.props.user;

      var questions = this.props.questions;

      var allItems = getObjectArray(questions);

      var answerKeys = Object.keys(user.answers);

      var answeredQuestions = getAllItemsWhereKeysExist(allItems,answerKeys);

      var unansweredQuestions = getAllItemsExceptFromKeys(allItems,answerKeys);

      var isUnansweredEnabled = this.props.isUnansweredEnabled;

      console.log('isUnansweredEnabled :', isUnansweredEnabled);

      return (
        <div className="Home">
          <div align="CENTER">

            <h1>Are you ready to play "Would you rather"?</h1>
            
            <table >
              <thead>
                <th>
                  <button onClick={this.setValue(isUnansweredEnabled,false)}>View Answered</button>
                </th>
                <th>
                  <button onClick={this.setValue(isUnansweredEnabled,true)}>View Unanswered</button>
                </th>
              </thead>
              <tbody>
                <tr colspan="2">
                  {(isUnansweredEnabled) ? 
                  (
                    <UnansweredQuestionsList 
                      user={user}
                      uncompletedQuetions = {unansweredQuestions}                
                    />
                  ):
                  (
                    <AnsweredQuestionsList 
                      user={user}
                      completedQuestions = {answeredQuestions}
                    />
                  )}
                  </tr>
              </tbody>
            </table>

          </div>
        </div>
      );
    }
  }
  
  export default Home;