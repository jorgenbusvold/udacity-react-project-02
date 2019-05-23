import React, { Component } from 'react';
import './App.css';
import CompletedOption from './CompletedOption'
import {connect} from 'react-redux';

class CompletedPoll extends Component {


    optionHasUsersVote = (user, votes) => {
        return votes.includes(user.id);
    }

    render(){
        console.log('Enter Completed POLL');

        var user = this.props.authenticatedUser;
        
        console.log('User: ',user);

        var question = this.props.questions[this.props.questionId];

        var totalNumberOfVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        
        return (
            <div className="Container">            
                <div className="completed-question" align="CENTER">
                    <h1>Completed question</h1>
                    <b>Would you rather..</b>
                    <br />
                    <CompletedOption 
                        text = {question.optionOne.text} 
                        numberOfVotes = {question.optionOne.votes.length}
                        totalNumberOfVotes = {totalNumberOfVotes}
                        hasUsersVote = {this.optionHasUsersVote(user,question.optionOne.votes)}
                        />

                    <br />
                    <br />

                    <CompletedOption 
                        text = {question.optionTwo.text} 
                        numberOfVotes = {question.optionTwo.votes.length}
                        totalNumberOfVotes = {totalNumberOfVotes}
                        hasUsersVote = {this.optionHasUsersVote(user,question.optionTwo.votes)}
                        />
                   
                </div>
            </div>            
        );
    }
}

function mapStateToProps({authenticatedUser, questions}, ownProps){
    return{
        authenticatedUser,
        questions,
    }
}

export default connect(mapStateToProps)(CompletedPoll);