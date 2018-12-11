import React, { Component } from 'react';
import './App.css';

class CompletedOption extends Component {

    render() {

        var text = this.props.text;

        var numberOfVotes = this.props.numberOfVotes;

        var totalNumberOfVotes = this.props.totalNumberOfVotes;

        var hasUsersVote = this.props.hasUsersVote;

        return (
            <div className="option-container">
                {/*
                    * For answered polls, each of the two options contains the following:
                        - the text of the option;
                        - the number of people who voted for that option;
                        - the percentage of people who voted for that option.
                        - The option selected by the logged in user should be clearly marked.
                */}
                <div className="option">

                    <div className="option-text">
                        {text}
                    </div>

                    <br />

                    <div className="number-of-votes">
                        Has {numberOfVotes} of {totalNumberOfVotes} votes.
                    </div>

                    <br />

                    <div className="percentage-of-votes">
                        Percentage of votes: {(numberOfVotes * 100) /totalNumberOfVotes}%
                    </div>

                    <br />

                    {(hasUsersVote)?
                    (
                        <div className="users-vote">
                            Option has <b>YOUR</b> vote!!
                        </div>
                    )  : 
                    (
                        <div className="no-vote">
                        </div>
                    )
                }
                                      

                </div>                
            </div>
        );
    }
}

  export default CompletedOption;