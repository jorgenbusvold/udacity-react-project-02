import React, { Component } from 'react';
import './App.css';

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
                                <a href="~/Home">Home</a>     
                            </td>

                            <td className="nav">
                                <a href="~/Questions/Add">Add question</a>     
                            </td>

                            <td className="nav">
                                <a href="~/Leaderboard">Leaderboard</a>     
                            </td>

                        </tr>
                    </tbody>
                </table>

            </header>
        );

    }
}

export default NavigationHeader;