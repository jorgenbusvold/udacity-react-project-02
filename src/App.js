import React, { Component,Fragment } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import AddPoll from './AddPoll';
import NavigationHeader from './NavigationHeader';
import LeaderBoard from './LeaderBoard';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import QuestionHandler from './QuestionHandler';
import {connect} from 'react-redux';
import {handleInitialData} from './redux/actions/Shared';


class App extends Component {
  

  componentDidMount(){
    this.props.dispatch(handleInitialData())
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
    
    let {authenticatedUser} = this.props;
    
    return (
      <div className="app">
        { (authenticatedUser !== null 
            && authenticatedUser.authenticatedUser !== null) ? 
            (
            <div>
              <Router>
                <Fragment>
                <NavigationHeader />
              
                <Route
                    exact path="/add" 
                    render={
                      ({history}) => (
                      <AddPoll 
                          history = {history}
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
                    render={({history}) => (<Home history = {history}/>)
                    }
                  />

                <Route
                    path="/questions/:question_id" 
                    render={
                      ({history}) => 
                        <QuestionHandler
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
                    render={() => (<LeaderBoard /> )}
                  />      
                  </Fragment>        
              </Router>
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
    authenticatedUser 
  }
}

export default connect(mapStateToProps)(App);
