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
          id: 1,
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
      formAction: null, // 'add' / 'edit'
      messageFormObj: null
    };

    this.timer = setInterval(() => {
    	this.setState({
    		time: new Date().toLocaleTimeString(),
    	});
    }, 1000);

    this.toggleFormDisplayed = this.toggleFormDisplayed.bind(this);

    this.addMessage = this.addMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);

  }

  componentWillUnmount() {
  	window.clearInterval(this.timer);
  }

  toggleFormDisplayed (value, obj) {
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

    if (obj) {
      /* Update message */
      this.setState({
        messageFormObj: obj,
        formAction: 'update',
      }) 
    } else {
      /* Add new message */
      this.setState({
        messageFormObj: {
          id: this.state.messageList.length+1,
          message: '',
        },
        formAction: 'add'
      }) 
    }
  }

  addMessage (obj) {
    // this is reactive
    this.state.messageList.push(obj);
    this.setState({
      messageFormObj: {
        id: this.state.messageList.length+1,
        message: '',
      },
      formAction: 'add'
    }) 
    console.log(this);
}

  deleteMessage (messageId) {
    // this is also reactive
    let index = undefined;
    this.state.messageList.map((msg, i) => {
      if (msg.id == messageId) {
        index = i;
      }
    });
    this.state.messageList.splice(index, 1); 
  }

  updateMessage () {

  }

  render () {

	  return (
	    <div className={styles.messageList} >
	      <h1>Time {this.state.time}</h1>
        {this.state.messageList.map((message) =>
          <Message 
            key={message.id}
            obj={message} 
            toggleFormDisplayed={this.toggleFormDisplayed}
            deleteMessage={this.deleteMessage}
          />
        )}

        <button className={styles.button} onClick={(e) => this.toggleFormDisplayed() } >
          Add new message
        </button>

        {this.state.formDisplayed &&
          <MessageForm 
            obj={this.state.messageFormObj} 
            formAction={this.state.formAction}
            addMessage={this.addMessage}
            updateMessage={this.updateMessage}
          ></MessageForm>
        }
	    </div>
	  );
  }
}
