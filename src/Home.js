import React, { Component } from 'react';
import './App.css';
import NavigationHeader from './NavigationHeader';

class Home extends Component {


    getAvailableItemsArray = (questions) => {
      var items = []; 

      var i = 0;

      var keys = Object.keys(questions);

      for(var key in keys)
      {
        var item = questions[keys[i]];
        console.log(item);
        items.push(item);
        i++;
      }

      return items;  
    }

    getCompletedQuestionsArray = (completedQuestionKeys, allQuestions) => {

      console.log(completedQuestionKeys);

      var items = []; 

      var i = 0;

      for(var key in completedQuestionKeys)
      {
        var item = allQuestions[key];
        console.log(item);
        items.push(item);
        i++;
      }

      return items;  
    }

    getUncompletedQuestionsArray = (completedQuestionKeys, allQuestions) => {

      var items = []; 

      var i = 0;

      for(var q in allQuestions)
      {
        if(!completedQuestionKeys.includes(q.id))
        {
          items.push(q);
        }
        
        i++;
      }

      return items;  
    }

    showMessage = () => {
      alert("Boooh");
    }

    render() {

      var user = this.props.users;

      var questions = this.props.questions;

      var allItems = this.getAvailableItemsArray(questions);

      var answerKeys = Object.keys(user.answers);

      var completedQuestions = this.getCompletedQuestionsArray(answerKeys,allItems);

      var uncompletedQuetions = this.getUncompletedQuestionsArray(answerKeys,allItems);

      var availableItems = uncompletedQuetions.map(item => (
        <tr key={item.id}>
          <table>
            <tbody>
              <tr >
                  <td align="left" colspan="3" bgcolor="gainsboro">
                    {item.author} asks:
                  </td>
                </tr>
                <tr>
                  <td>AVATAR_IMG</td>
                  <td>
                      <b>Would you rather </b>
                      <br/>
                      ...{console.log(item)}
                  </td>  
                  <br />
                  <button onClick={this.showMessage}>View POLL</button>                  
                </tr>
            </tbody>
          </table>
        </tr>
      ));

      var completedListItems = completedQuestions.map(item => (
        <tr key={item.id}>
          <table>
            <tbody>
              
                <tr>

                  <td align="left" colspan="2" bgcolor="gainsboro">
                    {item.author} asks:
                  </td>

                </tr>

                <tr align="right">

                  <td align="left">AVATAR_IMG</td>

                  <td align="left">
                      <b>Would you rather </b>
                      <br/>
                      ...{item.optionOne.text}
                      <br />
                      <button onClick={this.showMessage}>View result</button>
                  </td>  

                </tr>

            </tbody>
          </table>
        </tr>
      ));

      return (
        <div className="Home">
          <div align="CENTER">
            <h1>Are you ready to play "Would you rather"?</h1>
            <table >
              <tbody>
              <tr>

                <td valign="TOP">
                  <div className="unansweredPolls" >
                    <table>
                      <thead>
                        <th bgcolor="lightcoral">Unanswered questions</th>
                      </thead>
                      <tbody>
                        {availableItems}
                      </tbody>
                    </table>
                  </div>
                </td>

                <td valign="TOP">
                  <div className="completedPolls">
                    <table>
                      <thead>
                        <th bgcolor="palegreen">Completed questions</th>
                      </thead>
                      <tbody>
                        {completedListItems}
                      </tbody>
                    </table>
                  </div>
                </td>

                </tr>
              </tbody>
            </table>
          </div>

        </div>
      );
    }
  }
  
  export default Home;