import React, { Component } from 'react';
import './App.css';
import LeaderBoardUser from './LeaderBoardUser';
import {getObjectArray} from './Helpers';
import {connect} from 'react-redux';


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
                        {getObjectArray(users)
                                //.sort((a,b) => users[b].timestamp - users[a].timestamp)
                                .map((u) => (
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

function mapStateToProps({users}){
    return {
        users
    }
}
export default connect(mapStateToProps)(LeaderBoard);