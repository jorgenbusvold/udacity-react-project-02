import React, { Component } from 'react';
import './App.css';
import LeaderBoardUser from './LeaderBoardUser';
import {getObjectArray} from './Helpers';

class LeaderBoard extends Component {


    
    render(){
        
        console.log('Enter LeaderBoard');

        var users = this.props.users;
        
        console.log('Users: ', users);

        return (
            <div className="Container">            
                <div className="LeaderBoard" align="CENTER">
                    <h1>LeaderBoard</h1>
                    <div className="leader-board-users">
                        {/* 
                        * Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked. 
                        */}
                        {getObjectArray(users).map((u) => (
                                <LeaderBoardUser 
                                    key={u.id}
                                    user = {u}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>            
        );
    }
}

export default LeaderBoard;