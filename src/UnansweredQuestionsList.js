import React, { Component } from 'react';
import {getAllItemsExceptFromKeys,getAllItemsWhereKeyValuesExist} from './Helpers';
import './App.css';
import {connect} from 'react-redux';

class UnansweredQuestionsList extends Component {



    showPoll = (user, question) =>{
      console.log('ENTER showPoll: user: ', user);

      console.log('question: ', question);
      
      var url = `/questions/${question.id}`;

      console.log('redirect to url: ', url);

      this.props.history.push(url);
    }

    render() {
        console.log('Enter UnansweredQuestionsList');

        var user = this.props.authenticatedUser;
        
        console.log(user)

        var questions = this.props.questions;

        console.log('questions')
        console.log(questions);
  

        var answeredQuestionsKeys = Object.keys(user.answers);
        
        let sortedQuestionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp);

        let sortedQuestions = getAllItemsWhereKeyValuesExist(questions,sortedQuestionIds);
        
        let uncompletedQuetions = getAllItemsExceptFromKeys(sortedQuestions, answeredQuestionsKeys);

        // var uncompletedQuetions = getAllItemsExceptFromKeys(questions,answeredQuestionsKeys);

        var availableItems = uncompletedQuetions
            .map(item => (
              // CONSIDER TO BREAK THIS OUT INTO AN Separate ListItem-class...
            <tr key={item.id} className="incomplete-question-item">
              <td>
                <div align="left" colSpan="3" bgcolor="gainsboro">
                  {item.author} asks:
                </div>

                <div>AVATAR_IMG</div>
              </td>
              <td>
                <div>
                    <b>Would you rather </b>
                    <br/>
                    ...{item.optionOne.text}
                    <br />
                    <button 
                      onClick={() => 
                      this.showPoll(user, item)}>
                      >
                      View POLL
                      </button>  
                </div> 
                </td>
             </tr>
        ));

        return (
            <div>
                  <div className="unansweredPolls"  align="CENTER">
                    <table>
                        <thead>
                          <tr>
                            <th bgcolor="lightcoral" colSpan="2">Unanswered questions</th>
                          </tr> 
                        </thead>
                        <tbody>
                          {availableItems}
                        </tbody>
                    </table>
                  </div>
            </div>
        );
    }
}

function mapStateToProps({authenticatedUser, questions}){
  return {
    authenticatedUser,
    questions
  }
}
export default connect(mapStateToProps)(UnansweredQuestionsList);