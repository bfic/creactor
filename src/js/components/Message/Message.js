import React, { Component } from 'react';

let styles = require('./style.scss');

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleEditClick () {
    this.props.toggleFormDisplayed(true, this.props.obj);
  }

  handleDeleteClick () {
    this.props.deleteMessage(this.props.obj.id);
  }

  render () {
	  return (
	    <div className={styles.message} >
        <div className={styles.text}>
          {this.props.obj.message}
        </div>

        <button className={styles.button} onClick={this.handleEditClick} >Edit</button>
        <button  className={styles.button} onClick={this.handleDeleteClick} >Delete</button>
	    </div>
	  );
  }
}
