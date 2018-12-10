import React, { Component } from 'react';
import './App.css';

class Login extends Component {


    getSelectedOption = () => {
      if (this.refs.selectedOption) {
        return parseInt(this.refs.selectedOption.value);
      }
    }

    logSelectedOption = () => {
      var selectedId = this.getSelectedOption();
      console.log("Selected Id : "+selectedId);
    }

    render() {
  
      const {users} = this.props;
  
      var options = users.map(u => (
        <option key={u.id} value={u.id}>{u.name}</option>
      ));

      return (
        <div className="Login">
          
          <header>Login</header>

          <select ref="selectedOption">{options}</select>

          <button
              onClick={() => this.logSelectedOption()}>Log</button>

          <button
              onClick={() => this.props.onUserLoggedIn(users.filter((u) => u.id === this.getSelectedOption()))}>Login</button>

        </div>
      );
    }
  }
  
  export default Login;