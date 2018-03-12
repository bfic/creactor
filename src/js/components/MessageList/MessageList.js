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

    this.addMessage = this.addMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);

  }

  componentWillUnmount() {
  	window.clearInterval(this.timer);
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
    const newMessage = {
      id: this.state.messageList.length+1,
      message: '',
    };

	  return (
	    <div className={styles.messageList} >
	      <h1>Time {this.state.time}</h1>
        {this.state.messageList.map((message) =>
          <Message 
            key={message.id}
            obj={message} 
            deleteMessage={this.deleteMessage}
          />
        )}

        <button className={styles.button} onClick={(e) => this.toggleFormDisplayed() } >
          Add new message
        </button>

        <MessageForm 
          obj={newMessage} 
          addMessage={this.addMessage}
        >
        </MessageForm>
	    </div>
	  );
  }
}
