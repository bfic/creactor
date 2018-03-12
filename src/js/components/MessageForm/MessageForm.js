import React, { Component } from 'react';

let styles = require('./style.scss');

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageText: this.props.obj.message,
    };

    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick () {
    let newObj = Object.assign({}, this.props.obj);
    newObj.message = this.state.messageText;

    this.props.addMessage(newObj);
    this.setState({
      messageText: '',
    })
  }

  render () {
	  return (
	    <div className={styles.messageForm} >
        { 'Add new message'}
        <br/>
        <input 
          type="text" 
          value={this.state.messageText} 
          onChange={(event) => { this.setState({messageText: event.target.value}) }}
        />
        <button className={styles.button} onClick={this.handleSaveClick}>Save</button>
	    </div>
	  );
  }
}
