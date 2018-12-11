import React, { Component } from 'react';
import './App.css';

class Login extends Component {


    getSelectedOption = () => {
      if (this.refs.selectedOption) {
        return this.refs.selectedOption.value;
      }
    }

    getObjectArray = (objectEntries) => {
      var entries = []; 

      var i = 0;

      var keys = Object.keys(objectEntries);

      for(var key in keys)
      {
        var entry = objectEntries[keys[i]];
        console.log(entry);
        entries.push(entry);
        i++;
      }

      return entries;
    }

    render() {
  
      const {users} = this.props;
  
      var options = this.getObjectArray(users).map(u => (
        <option key={u.id} value={u.id}>{u.name}</option>
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