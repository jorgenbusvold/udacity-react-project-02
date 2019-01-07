import React, { Component } from 'react';
import './App.css';
import serializeForm from 'form-serialize';

class UnansweredPoll extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();

        const values = serializeForm(e.target, {hash:true});

        console.log('values: ',values);
        // TODO implement asction: SAVE_ANSWER_RESULT

        // this.props.onAnswerSubmitted(user, question);
    }
    
    render(){

        console.log('Enter Unanswered POLL');
        var user = this.props.user;

        var question = this.props.question;

        console.log(question);

        return (
            <div className="Container">            
                <div className="UnansweredQuestion" align="CENTER">
                    <b>Author: </b>{question.author}
                        <h1>Unanswered questions</h1>
                    <b>Would you rather</b>
                    <br />
                    <form
                        // onSubmit={this.handleSubmit} 
                        >
                        <input type="radio" value={question.optionOne.text} />{question.optionOne.text}
                        <br />
                        ...or
                        <br />
                        <input type="radio" value={question.optionTwo.text} />{question.optionTwo.text}
                        <br />
                        {/* <input type="submit" value="Submit"/> */}
                        <button 
                            onClick={() => 
                            this.props.onAnswerSubmitted(user, question)}>
                            Submit answer
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UnansweredPoll;