import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logOutUser } from './redux/actions/LogOutUser';

class NavigationHeader extends Component {



    render(){

        const authenticatedUser = this.props.authenticatedUser;

        return (
            
                <header>
      
                    <div align="RIGHT">
                        <b>AVATAR</b> Hi, {authenticatedUser.name}&nbsp;&nbsp;
                        <br/>
                        <button onClick={() => this.props.dispatch(logOutUser())}>Log out</button>&nbsp;&nbsp;
                    </div>

                    <table align="CENTER">
                        <tbody>
                            <tr>
                                <td className="nav">
                                    <Link to="/">Home</Link>
                                </td>

                                <td className="nav">
                                    <Link to="/add">New Question</Link>
                                </td>

                                <td className="nav">
                                    <Link to="/leaderboard">Leader Board</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </header>                           
        );
    }
}

function mapStateToProps({authenticatedUser}){
    return {
        authenticatedUser,
        isUserAuthenticated : authenticatedUser === null ? false : true,
    }
}
export default connect(mapStateToProps)(NavigationHeader);