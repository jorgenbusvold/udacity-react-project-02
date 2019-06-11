import React, { Component } from 'react';
import './App.css';
import {getObjectArray} from './Helpers';
import {connect} from 'react-redux';

class LeaderBoardUser extends Component {

    render(){
        
        console.log('Enter LeaderBoardUser');

        const {user} = this.props;
        
        console.log('User: ', user);

        var numberOfAnswers = getObjectArray(user.answers).length;

        var numberOfQuestions = user.questions.length;

        console.log('user questions: ')
        console.log(user.questions);

        var totalNumberOfPoints = numberOfAnswers + numberOfQuestions;

        return (
            <div className="Container">            
                <div className="LeaderBoardUser" align="CENTER">
                    <div>
                        <img src={user.avatarURL} alt={user.name}  height='120' width='120' />
                    </div>
                    <b>{user.name}</b> has <b>{totalNumberOfPoints}</b> points.
                    {/* 
                    * Each entry on the leaderboard contains the following:
                        - the user’s name;
                        - the user’s picture;
                        - the number of questions the user asked; and
                        - the number of questions the user answered. 
                    */}
                    
                    <div className="had-created-number-of-questions">
                        - {numberOfQuestions} questions asked.
                    </div>

                    <div className="had-answered-number-of-questions">
                        - {numberOfAnswers} questions answered.
                    </div>
                
                    <hr />
                </div>
            </div>            
        );
    }
}

function mapStateToProps({authenticatedUser, questions}){
    return {
        authenticatedUser,
        questions,
    }
}

export default connect(mapStateToProps)(LeaderBoardUser);