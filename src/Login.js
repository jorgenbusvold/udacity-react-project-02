import React, { Component } from 'react';
import './App.css';
import {getObjectArray} from './Helpers';
import {connect} from 'react-redux';
import {handleLogInUser} from './redux/actions/LogInUser';

class Login extends Component {


    getSelectedOption = () => {
      if (this.refs.selectedOption) {
        return this.refs.selectedOption.value;
      }
    }

    render() {
  
      console.log(this.props);

      const {users} = this.props;
  
      var options = getObjectArray(users).map(u => (
        <option 
            key={u.id} 
            value={u.id}>{u.name}
        </option>
      ));
                  
      return (
        <div className="Login" align="CENTER">
          <header>Login</header>

          {this.props.loading === true ? null :
            <div>          
              <select ref="selectedOption">
              {options}
              </select>
              {/* <button onClick={() => this.props.onUserLoggedIn(users[this.getSelectedOption()])}> */}
              <button onClick={() => this.props.dispatch(handleLogInUser(users[this.getSelectedOption()]))}>
                  Login
              </button>
            </div>   
          }    
        </div>
      );
    }
  }
  
  function mapStateToProps({authenticatedUser,users}){
    return {
      loading : users === null,
      users,
      authenticatedUser 
    }
  }

  export default connect(mapStateToProps)(Login);