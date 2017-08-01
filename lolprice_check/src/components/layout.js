import React, { Component } from 'react';
import Artyom from 'artyom.js';
import {ApiAiClient} from "api-ai-javascript";

import ResultStatement from './result';

class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
      theResult: ''
    };

  }
  componentDidMount(){
    var Component = this;
    var client;
    client = new ApiAiClient({accessToken: "585cfd962bea4e58bc07e568b69615a8"});
    const artyom = new Artyom();
    // Add a single command
    var commandHello = {
        smart:true,
        indexes:["okay Bob *"], // These spoken words will trigger the execution of the command
        action:function(i, wildcard){ // Action to be executed when a index match with spoken word
          //  console.log(wildcard);
          //  artyom.dontObey();
          //  artyom.say(wildcard);
          //  artyom.obey();
             client.textRequest(wildcard)
             .then(function(response) {
                     var result;
                     try {
                       result = response.result.fulfillment.speech
                     } catch(error) {
                       result = "";
                     }
                     //console.log(response);
                     //console.log(result);
                     Component.setState({theResult:result});

                     artyom.say(result);

                   })
                   .catch(function(err) {
                     console.log(err);

                   });
        }
    };

    artyom.addCommands(commandHello); // Add the command with addCommands method. Now
    startContinuousArtyom();

    // This function activates artyom and will listen all that you say forever (requires https conection, otherwise a dialog will request if you allow the use of the microphone)
    function startContinuousArtyom(){
        artyom.fatality();// use this to stop any of

        setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
             artyom.initialize({
                lang:"en-US",// A lot of languages are supported. Read the docs !
                continuous:true,// Artyom will listen forever
                listen:true, // Start recognizing
                debug:true, // Show everything in the console
                speed:1 // talk normally
            }).then(function(){
                console.log("Ready to work !");
            });
        },250);
    }

  }


  render(){
    return(
      <div>
      <ResultStatement answer={this.state} />

      </div>
    );
  }
}
export default Layout;
