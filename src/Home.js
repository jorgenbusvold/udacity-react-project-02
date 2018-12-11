import React, { Component } from 'react';
import './App.css';
import {getObjectArray, getAllItemsExceptFromKeys, getAllItemsWhereKeysExist} from './Helpers';
import AnsweredQuestionsList from './AnsweredQuestionsList';
import UnansweredQuestionsList from './UnansweredQuestionsList';  

class Home extends Component {

  state = {
    viewUnAnsweredItems : true
  }

  showUnansweredQuestions = () => {
    this.setState((currentState) => ({
      viewUnAnsweredItems : true
    })); 
  }

  showCompletedQuestions = () => {
    this.setState((currentState) => ({
      viewUnAnsweredItems : false
    })); 
  }

    render() {

      var user = this.props.user;

      var questions = this.props.questions;

      var allItems = getObjectArray(questions);

      var answeredQuestionsKeys = Object.keys(user.answers);

      return (
        <div className="Home">
          <div align="CENTER">

            <h1>Are you ready to play "Would you rather"?</h1>
            <div>
              <button onClick={() => this.showUnansweredQuestions()}>
                Show unanswered
              </button>

              <button onClick={() => this.showCompletedQuestions()}>
                Show Completed
              </button>

              
            </div>

            {this.state.viewUnAnsweredItems? 
            (
              <UnansweredQuestionsList 
                user={user}
                uncompletedQuetions = {getAllItemsExceptFromKeys(allItems,answeredQuestionsKeys)}                
              />
            ):
            (
              <AnsweredQuestionsList 
                user={user}
                completedQuestions = {getAllItemsWhereKeysExist(allItems,answeredQuestionsKeys)}
              />
            )}


          </div>
        </div>
      );
    }
  }
  
  export default Home;