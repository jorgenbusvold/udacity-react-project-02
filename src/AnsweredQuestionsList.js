import React, { Component } from 'react';
import './App.css';

class AnsweredQuestionsList extends Component {


    showMessage = () => {
        alert("Boooh");
      }

    render(){
        
        console.log('Enter AnsweredQuestionsList');

        var user = this.props.user;
        
        console.log('User: ', user);

        var completedQuestions = this.props.completedQuestions;

        console.log('completedQuestions: ', completedQuestions);

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
            <div className="Container">            
                <div className="AnsweredQuestionsList" align="CENTER">
                    <h1>AnsweredQuestionsList</h1>
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
                </div>
            </div>            
        );
    }
}

export default AnsweredQuestionsList;