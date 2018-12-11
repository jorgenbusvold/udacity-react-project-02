import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import UnansweredPoll from './UnansweredPoll';
import AddPoll from './AddPoll';
import NavigationHeader from './NavigationHeader';
import LeaderBoard from './LeaderBoard';
import {Route} from 'react-router-dom';

class App extends Component {
  
  state = {
    users : {
      sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        //avatarURL: ,
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionTwo',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        //avatarURL: ,
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      },
      johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        //avatarURL: ,
        answers: {
          "xj352vofupe1dqz9emx13r": 'optionOne',
          "vthrdm985a262al8qx3do": 'optionTwo',
          "6ni6ok3ym7mf1p33lnez": 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
      }
    },
    questions : {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'have horrible short term memory',
        },
        optionTwo: {
          votes: [],
          text: 'have horrible long term memory'
        }
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1468479767190,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['johndoe', 'sarahedo'],
          text: 'become a supervillain'
        }
      },
      "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: 'be telekinetic',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be telepathic'
        }
      },
      "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: 'be a front-end developer',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be a back-end developer'
        }
      },
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
          votes: ['tylermcginnis'],
          text: 'find $50 yourself',
        },
        optionTwo: {
          votes: ['johndoe'],
          text: 'have your best friend find $500'
        }
      },
      "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
          votes: ['johndoe'],
          text: 'write JavaScript',
        },
        optionTwo: {
          votes: ['tylermcginnis'],
          text: 'write Swift'
        }
      }
    },
    isUserLoggedIn : false
  };

  

  onUserLoggedIn = (user) => {
    console.log("ENTER: onUserLoggedIn")
    console.info(user);

    this.setState((currentState) => ({
      users : currentState.users[user.id], 
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
            <div>
              <NavigationHeader 
                user = {this.state.users}
                onUserLoggedOut = {this.onUserLoggedOut}
              />
              <Route
                exact path="/Questions" render={
                  () => (
                    <Home 
                      users={this.state.users}
                      questions={this.state.questions}
                      onUserLoggedOut={this.onUserLoggedOut}
                    />
                  )
                }
              />

              <Route
                exact path="/Questions/Unanswered" render={
                  () => (
                    <UnansweredPoll 
                      question={this.state.questions["8xf0y6ziyjabvozdd253nd"]}
                    />
                  )
                }
              />  

              <Route
                exact path="/Questions/Add" render={
                  () => (
                  <AddPoll
                    users={this.state.users}
                    questions={this.state.questions}
                    onUserLoggedOut={this.onUserLoggedOut}
                  /> 
                  )
                }
              />  

              <Route
                exact path="/Leaderboard" render={
                  () => (
                  <LeaderBoard
                    
                  /> 
                  )
                }
              />              

            </div>
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
