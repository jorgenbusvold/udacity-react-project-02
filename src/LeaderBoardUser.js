import React, { Component } from 'react';
import './App.css';
import {getObjectArray} from './Helpers';

class LeaderBoardUser extends Component {

    render(){
        
        console.log('Enter LeaderBoardUser');

        var user = this.props.user;
        
        console.log('User: ', user);

        var numberOfAnswers = getObjectArray(user.answers).length;

        var numberOfQuestions = user.questions.length;

        var totalNumberOfPoints = numberOfAnswers + numberOfQuestions;

        return (
            <div className="Container">            
                <div className="LeaderBoardUser" align="CENTER">
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

export default LeaderBoardUser;