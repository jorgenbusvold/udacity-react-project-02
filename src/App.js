import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';

class App extends Component {
  
  state = {
    users : [
      {
        id : 1,
        name : "Terry Tester"
      },
      {
        id : 2,
        name : "Harry Hacker"
      },
      {
        id : 3,
        name : "Cory Cracker"
      }         
    ],
    isUserLoggedIn : false
  };

  

  onUserLoggedIn = (user) => {
    console.info(user);

    this.setState((currentState) => ({
      users : currentState.users.filter((u) => {return u.id === user.id}),
      isUserLoggedIn : true
    })); 
  }

  onUserLoggedOut = () => {
    this.setState((currentState) => ({
      isUserLoggedIn:false
      
    }))    
  }

  render() {

    return (
      <div className="app">
        { (this.state.isUserLoggedIn) ? (
            
            <Home 
              users={this.state.users}
            />
          ) :(
            <Login 
              users = {this.state.users}
              onUserLoggedIn={this.onUserLoggedIn}
            />
          )  
        }
      </div> 
    );
  }
}

export default App;
