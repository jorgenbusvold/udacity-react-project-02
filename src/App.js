import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import AddPoll from './AddPoll';
import NavigationHeader from './NavigationHeader';
import LeaderBoard from './LeaderBoard';
import {Route} from 'react-router-dom';
import QuestionHandler from './QuestionHandler';
import {connect} from 'react-redux';
import {handleInitialData} from './redux/actions/Shared'

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
    isUserLoggedIn : false,
    loggedInUser : null,
  };

  componentDidMount(){
    console.log('Enter : componentDidMount')
    this.props.dispatch(handleInitialData())
  }


  onUserLoggedIn = (user) => {
    console.log("ENTER: onUserLoggedIn")
    console.info(user);

    this.setState((currentState) => ({
      //users : currentState.users[user.id], 
      loggedInUser : currentState.users[user.id], 
      isUserLoggedIn : true
    })); 
  }

  onUserLoggedOut = () => {
    this.setState((currentState) => ({
      isUserLoggedIn:false
      
    }))    
  }

  onPollCreated = (user, poll) => {
    console.log('New poll created by user: ', user)
    console.log('New poll created: ', poll)

    // this.setState((currentState) => ({
    //     questions: currentState.questions.concat(poll)
    //   }));
  }

  onAnswerSubmitted = (user, question) => {
    console.log("Answer submitted by user: ", user);
    console.log("Answer submitted for question: ", question);
  }

  isQuestionCompletedByUser = (question, user) => {

    console.log('Question: ', question)
    console.log('User: ', user)
    console.log('will return  TRUE')
    
    return true;
  }

  render() {
    
    let {isUserAuthenticated} = this.props;

    return (
      <div className="app">
        { (isUserAuthenticated) ? (
            <div>

              <NavigationHeader 
                user = {this.state.loggedInUser}
                onUserLoggedOut = {this.onUserLoggedOut}
              />

              <Route
                exact path="/add" 
                render={
                  ({history}) => (
                  <AddPoll
                    user = {this.state.loggedInUser}
                    onPollCreated = {(poll) => {
                      this.onPollCreated(poll);
                      history.push('/')
                      }
                    }
                  /> 
                  )
                }
              />  

            <Route
                exact path="/" 
                render={
                  ({history}) => (
                    <Home 
                      user={this.state.loggedInUser}
                      questions={this.state.questions}
                      onUserLoggedOut={this.onUserLoggedOut}
                      history = {history}
                    />
                  )
                }
              />

            <Route
                 path="/questions/:question_id" 
                 render={
                   ({history}) => 
                    <QuestionHandler
                      user = {this.state.loggedInUser}
                      questions = {this.state.questions}
                      history = {history}
                      onAnswerSubmitted = {(user,question) => {
                          this.onAnswerSubmitted(user,question)
                          history.push('/');
                          }
                      }
                    />
                  }
              /> 


               

              <Route
                exact path="/leaderboard" 
                render={
                  () => (
                  <LeaderBoard
                    users = {this.state.users}
                  /> 
                  )
                }
              />              

            </div>

          ) : (
            <Login />
          )  
        }
      </div> 
    );
  }
}

function mapStateToProps({authenticatedUser}){
  return {
    isUserAuthenticated : authenticatedUser === null ? false : true
  }
}

export default connect(mapStateToProps)(App);
