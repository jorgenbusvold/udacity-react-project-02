import React, { Component } from 'react';
import './App.css';

class AddPoll extends Component {

    render(){
        return (
            <div className="Container">            
                <div className="AddPoll" align="CENTER">

                    <h1>Add new poll</h1>

                    

                    <div align="CENTER">

                        <b>Would you rather...</b>

                        <form className="add-new-poll">

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