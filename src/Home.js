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

  hideUnansweredQuestions = () => {
    this.setState((currentState) => ({
      viewUnAnsweredItems : false
    })); 
  }

    render() {

      var user = this.props.user;

      var questions = this.props.questions;

      var allItems = getObjectArray(questions);

      var answerKeys = Object.keys(user.answers);

      var answeredQuestions = getAllItemsWhereKeysExist(allItems,answerKeys);

      var unansweredQuestions = getAllItemsExceptFromKeys(allItems,answerKeys);

      var {viewUnansweredQuestions,hideUnansweredQuestions} = this.props;

      return (
        <div className="Home">
          <div align="CENTER">

            <h1>Are you ready to play "Would you rather"?</h1>
            <div>
              <button 
                onClick={() => this.hideUnansweredQuestions()}
              >
              Hide unanswered
              </button>

              <button 
                onClick={() => this.showUnansweredQuestions()}
              >
              Show unanswered
              </button>
            </div>

            {this.state.viewUnAnsweredItems? 
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


          </div>
        </div>
      );
    }
  }
  
  export default Home;