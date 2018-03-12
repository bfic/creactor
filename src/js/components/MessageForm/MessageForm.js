import React, { Component } from 'react';

let styles = require('./style.scss');

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render () {
	  return (
	    <div className={styles.messageForm} >
	    </div>
	  );
  }
}
