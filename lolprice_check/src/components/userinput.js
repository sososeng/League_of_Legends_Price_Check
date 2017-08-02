import React,{ Component } from 'react';
import Artyom from 'artyom.js';
import {ApiAiClient} from "api-ai-javascript";

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = { input: ''};
  }
  handleSubmit(event){
    event.preventDefault();
    var client;
    client = new ApiAiClient({accessToken: "585cfd962bea4e58bc07e568b69615a8"});
    const artyom = new Artyom();
    artyom.initialize({
       lang:"en-US",// A lot of languages are supported. Read the docs !
       continuous:false,// Artyom will listen forever
       listen:false, // Start recognizing
       debug:true, // Show everything in the console
       speed:1 // talk normally
   })
    var mythis = this;

    client.textRequest(mythis.state.input)
    .then(function(response) {
            var result;
            try {
              result = response.result.fulfillment.speech
            } catch(error) {
              result = "";
            }
            //console.log(response);
            //console.log(result);
            //Component.setState({theResult:result});
            console.log(result);
            artyom.say(result);

          })
          .catch(function(err) {
            console.log(err);

          });

  }

  render() {
    return(
      <div className="input-field">
        <form onSubmit={event => this.handleSubmit(event)}>
        <input
            value={this.state.input}
            onChange={event => this.setState ({input: event.target.value})} />
        </form>
      </div>
    );
  }
}

export default UserInput;
