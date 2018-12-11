import React, { Component } from 'react';
import './App.css';

class UnansweredPoll extends Component {

    
    render(){

        var question = this.props.question;

        console.log(question);

        return (
            <div className="Container">            
                <div className="UnansweredQuestion" align="CENTER">
                    <b>Author: </b>{question.author}
                    <h1>Unanswered questions</h1>
                    <b>Would you rather</b>
                    <br />
                    <form>
                        <input type="radio" value={question.optionOne.text} />{question.optionOne.text}
                        <br />
                        ...or
                        <br />
                        <input type="radio" value={question.optionTwo.text} />{question.optionTwo.text}
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default UnansweredPoll;