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
                                    to="/questions">
                                    Home
                                </Link>
                            </td>

                            <td className="nav">
                                <Link 
                                    to="/questions/unanswered">
                                    Unanswered
                                </Link>
                            </td>

                            <td className="nav">
                                <Link 
                                    to="/questions/completed">
                                    Completed
                                </Link>
                            </td>

                            <td className="nav">
                                <Link 
                                    to="/questions/add">
                                    New Question
                                </Link>
                            </td>

                            <td className="nav">
                                <Link 
                                    to="/leaderboard">
                                    Leader Board
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