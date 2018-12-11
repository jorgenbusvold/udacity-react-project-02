import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class NavigationHeader extends Component {

    render(){

        var {user} = this.props;

        return (
            <header>

                <div align="RIGHT">
                    <b>AVATAR</b> Hi, {user.name}&nbsp;&nbsp;
                    <br/>
                    <button onClick={() => this.props.onUserLoggedOut()}>Log out</button>&nbsp;&nbsp;
                </div>

                <table align="CENTER">
                    <tbody>
                        <tr>
                            <td className="nav">
                                <Link 
                                    to="/Questions">
                                    Questions
                                </Link>
                            </td>

                            <td className="nav">
                                <Link 
                                    to="/Questions/Unanswered">
                                    Unanswered
                                </Link>
                            </td>

                            <td className="nav">
                                <Link 
                                    to="/Questions/Add">
                                    Add Question
                                </Link>
                            </td>

                            <td className="nav">
                                <Link 
                                    to="/Leaderboard">
                                    Leaderboard
                                </Link>
                            </td>


                        </tr>
                    </tbody>
                </table>

            </header>
        );

    }
}

export default NavigationHeader;