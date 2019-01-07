import React, { Component } from 'react';
import './App.css';
import serializeForm from 'form-serialize';

class AddPoll extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();

        const values = serializeForm(e.target, {hash:true});

        console.log('values: ',values);
        // TODO implement asction: SAVE_POLL

        this.props.onPollCreated(values);
    }

    render(){
        
        var user = this.props.user;

        console.log('User: ',user);

        return (
            <div className="Container">            
                <div className="AddPoll" align="CENTER">

                    <h1>Add new poll</h1>

                    

                    <div align="CENTER">

                        <b>Would you rather...</b>

                        <form 
                            onSubmit={this.handleSubmit} 
                            className="add-new-poll">

                            <input type="hidden" name="user" value={user} />

                            <input type="text" name="optionOne" placeholder="option one"/>
                            
                            <br />

                            ..or...

                            <br />
                            
                            <input type="text" name="optionTwo" placeholder="option two"/>

                            <br />

                            <button>Add poll</button>

                        </form>

                    </div>

                </div>
            </div>
        );
    }
}

export default AddPoll;