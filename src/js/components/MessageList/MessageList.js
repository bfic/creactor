import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageContainer from './../../../redux/containers/MessageContainer';
import MessageFormContainer from './../../../redux/containers/MessageFormContainer';
import { fetchMessages } from './../../../redux/actions/index';

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
  };

  static propTypes: {
    messageList: PropTypes.array.isRequired,
  };

  componentDidMount() {
    /* Fetching data on initial mount */
    const { dispatch, messageList, isFetching } = this.props
    dispatch(fetchMessages());
    console.log(this.props);
  }

  componentWillUnmount() {
  	window.clearInterval(this.timer);
  }


  render () {
    const newMessage = {
      id: this.state.messageList.length+1,
      message: '',
    };

    if (this.props.messageList) {
  	  return (
  	    <div className={styles.messageList} >
  	      <h1>Time {this.state.time}</h1>
          {this.props.messageList.map((message) =>
            <MessageContainer
              key={message.id}
              obj={message} 
            />
          )}

          <MessageFormContainer
            obj={newMessage} 
            messageList={this.props.messageList}
          >
          </MessageFormContainer>
  	    </div>
  	  );
    } else {
      return null;
    }
  }
}