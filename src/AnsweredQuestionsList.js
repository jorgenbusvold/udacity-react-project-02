import React, { Component } from 'react';
import {getAllItemsWhereKeysExist} from './Helpers';
import './App.css';

class AnsweredQuestionsList extends Component {


    showResult = (user, question) =>{
        console.log('ENTER showResult: user: ', user)
  
        console.log('question: ', question);

        var url = `/questions/${question.id}`;
  
        console.log('redirect to url: ', url);
  
        this.props.history.push(url);
    }


    render(){
        
        console.log('Enter AnsweredQuestionsList');

        var user = this.props.user;

        var answeredQuestionsKeys = Object.keys(user.answers);

        var completedQuestions = getAllItemsWhereKeysExist(this.props.allQuestionItems,answeredQuestionsKeys)

        var completedListItems = completedQuestions.map(item => (
            <tr key={item.id}>
                <td>
                    <div align="left" colSpan="3" bgcolor="gainsboro">
                        {item.author} asks:
                    </div>
                    <div>
                        AVATAR_IMG
                    </div>
                </td>
                

                <td align="left">
                    <b>Would you rather </b>
                    <br/>
                    ...{item.optionOne.text}
                    <br />
                    <button onClick={() => 
                        this.showResult(user,item)}>
                        View result
                    </button>
                </td>  
             </tr>
          ));


        return (
        
                <div className="AnsweredQuestionsList" align="CENTER">
                    <table>
                        <thead>
                            <tr>
                                <th bgcolor="palegreen" colSpan="2">Completed questions</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {completedListItems}
                        </tbody>
                    </table>
                </div>            
        );
    }
}

export default AnsweredQuestionsList;