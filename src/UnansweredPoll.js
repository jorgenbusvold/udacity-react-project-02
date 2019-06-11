import React, { Component } from 'react';
import './App.css';
import serializeForm from 'form-serialize';
import {connect } from 'react-redux';
import {handleAddQuestionVote} from './redux/actions/AddQuestionVote'

class UnansweredPoll extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();

        const values = serializeForm(e.target, {hash:true});

        const isFirstOptionChecked = e.target[0].checked;

        const isSecondOptionChecked = e.target[1].checked;
        

        if(isFirstOptionChecked && isSecondOptionChecked){
            console.warn('Illegal combination. Only one option can be checked')
        }

        console.log('values: ',values);

        const authenticatedUser = this.props.authenticatedUser;

        const question = this.props.question;

        const option = isFirstOptionChecked ? 'optionOne' : 'optionTwo';

        this.props.dispatch(handleAddQuestionVote({authenticatedUser, question, option}));
    }
    
    render(){
        
        console.log('Enter Unanswered POLL');

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
                        onSubmit={this.handleSubmit} 
                        >
                        <input type="radio" value={question.optionOne.text} />{question.optionOne.text}
                        <br />
                        ...or
                        <br />
                        <input type="radio" value={question.optionTwo.text} />{question.optionTwo.text}
                        <br />
                        <button>
                            Submit answer
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authenticatedUser, questions}, ownProps){
    const question = questions[ownProps.questionId];

    return{
        authenticatedUser, 
        question,

    }
}

export default connect(mapStateToProps)(UnansweredPoll);