import React, { Component } from 'react';
import './App.css';
import {getObjectArray} from './Helpers';

class Login extends Component {


    getSelectedOption = () => {
      if (this.refs.selectedOption) {
        return this.refs.selectedOption.value;
      }
    }

    render() {
  
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

          <select ref="selectedOption">
           {options}
          </select>

          <button
              onClick={() => this.props.onUserLoggedIn(users[this.getSelectedOption()])}>
              Login
          </button>

        </div>
      );
    }
  }
  
  export default Login;