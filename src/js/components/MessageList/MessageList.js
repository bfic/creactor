import React, { Component } from 'react';

import Message from './../Message/Message';
import MessageForm from './../MessageForm/MessageForm';

let styles = require('./style.scss');

export default class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
		 time: '',
     messageList: [
        {
          id:1,
          message: "Hello"
        },
        {
          id: 2,
          message: 'Hi!'
        },
        {
          id: 3,
          message: 'OOOOOO SDSDSDSSD',
        }
      ],
      formDisplayed: false,
    };

    this.timer = setInterval(() => {
    	this.setState({
    		time: new Date().toLocaleTimeString(),
    	});
    }, 1000);

    this.toggleFormDisplayed = this.toggleFormDisplayed.bind(this);

  }

  componentWillUnmount() {
  	window.clearInterval(this.timer);
  }

  toggleFormDisplayed (value) {
    console.log(value);
    /* 
      If value is passed we are setting formDisplay to value 
      If no we are setting formDisplayed to its negative value 
    */
    if (value) {
      this.setState({
        formDisplayed: value,
      })
    } else {
      this.setState({
        formDisplayed: !this.state.formDisplayed,
      })
    }
  }



  render () {
	  return (
	    <div className={styles.messageList} >
	      <h1>Time {this.state.time}</h1>
        { this.state.messageList.map((message) =>
          <Message 
            key={message.id}
            obj={message} 
            toggleFormDisplayed={this.toggleFormDisplayed}
          />
        )}

        <button className={styles.button} onClick={(e) => this.toggleFormDisplayed() } >
          Add new message
        </button>

        { this.state.formDisplayed &&
          <MessageForm obj={null} ></MessageForm>
        }
	    </div>
	  );
  }
}
