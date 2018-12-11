import React, { Component } from 'react';
import './App.css';

class UnansweredQuestionsList extends Component {

    showPoll = (user, question) =>{
      console.log('ENTER showPoll: user: ', user);

      console.log('question: ', question);
    }

    render() {

        console.log('Enter UnansweredQuestionsList');

        var user = this.props.user;

        var uncompletedQuetions = this.props.uncompletedQuetions;
        
        var availableItems = uncompletedQuetions.map(item => (
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
                    <button onClick={() => this.showPoll(user, item)}>View POLL</button>  
                </div> 
                </td>
             </tr>
        ));

        return (
            <div>
                  <div className="unansweredPolls" >
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

export default UnansweredQuestionsList;