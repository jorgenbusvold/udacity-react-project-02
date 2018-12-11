import React, { Component } from 'react';
import './App.css';

class UnansweredQuestionsList extends Component {

    render() {

        var uncompletedQuetions = this.props.uncompletedQuetions;
        
        var availableItems = uncompletedQuetions.map(item => (
            <tr key={item.id}>
              <table>
                <tbody>
                  <tr >
                      <td align="left" colspan="3" bgcolor="gainsboro">
                        {item.author} asks:
                      </td>
                    </tr>
                    <tr>
                      <td>AVATAR_IMG</td>
                      <td>
                          <b>Would you rather </b>
                          <br/>
                          ...{console.log(item)}
                      </td>  
                      <br />
                      <button onClick={this.showMessage}>View POLL</button>                  
                    </tr>
                </tbody>
              </table>
            </tr>
          ));

        return (
            <div>
                <td valign="TOP">
                  <div className="unansweredPolls" >
                    <table>
                      <thead>
                        <th bgcolor="lightcoral">Unanswered questions</th>
                      </thead>
                      <tbody>
                        {availableItems}
                      </tbody>
                    </table>
                  </div>
                </td>
            </div>
        );
    }
}

export default UnansweredQuestionsList;