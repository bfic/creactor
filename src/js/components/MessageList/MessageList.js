import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageContainer from './../../../redux/containers/MessageContainer';
import MessageFormContainer from './../../../redux/containers/MessageFormContainer';

let styles = require('./style.scss');

export default class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
		  time: '',
      messageList: [],
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
  };

  static propTypes: {
    messageList: PropTypes.array.isRequired,
  };

  componentWillUnmount() {
  	window.clearInterval(this.timer);
  }

  addMessage (obj) {
    // this is reactive
    this.state.messageList.push(obj);
    this.setState({
      messageFormObj: {
        id: this.props.messageList.length+1,
        message: '',
      },
      formAction: 'add'
    }) 
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
        {this.props.messageList.map((message) =>
          <MessageContainer
            key={message.id}
            obj={message} 
            deleteMessage={this.deleteMessage}
          />
        )}

        <MessageFormContainer
          obj={newMessage} 
          addMessage={this.addMessage}
        >
        </MessageFormContainer>
	    </div>
	  );
  }
}