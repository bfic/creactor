import React, { Component } from 'react';

import Message from './../Message/Message';

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
      }
    ],
    };

    this.timer = setInterval(() => {
    	this.setState({
    		time: new Date().toLocaleTimeString(),
    	});
    }, 1000);

  }

  componentWillUnmount() {
  	window.clearInterval(this.timer);
  }


  render () {
	  return (
	    <div className={styles.messageList} >
	      <h1>Time {this.state.time}</h1>
        { this.state.messageList.map((message) =>
          <Message 
            key={message.id}
            obj={message} 
          />
        )}
        <button className={styles.button}>Add new message</button>
	    </div>
	  );
  }
}
