import React, { Component } from 'react';
import './App.css';

class Home extends Component {
    render() {

      console.info("Receive users in home")
      console.info(this.props.users);

      var user = this.props.users[0];

      return (
        <div className="Home">
          <header>
              Hi, {user.name}
          </header>
          <h1>Are you ready to play "Would you rather"?</h1>
          
        </div>
      );
    }
  }
  
  export default Home;