import React, { Component } from 'react';

let styles = require('./style.scss');

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render () {
	  return (
	    <div className={styles.message} >
        <div className={styles.text}>
          {this.props.obj.message}
        </div>

        <button 
          className={styles.button}
        >
          Edit
        </button>

        <button 
          className={styles.button}
        >
          Delete
        </button>
	    </div>
	  );
  }
}
