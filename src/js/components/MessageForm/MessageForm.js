import React, { Component } from 'react';
import PropTypes from 'prop-types';

let styles = require('./style.scss');


export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.input = '';
  }

  render () {
    console.log(this);
    return (
      <div className={styles.messageForm} >
        <form onSubmit={e => {
            e.preventDefault()
            if (!this.input.value.trim()) {
              return
            }
            this.props.addMessage(this.input.value)
            this.input.value = ''
          }}
        >
          {'Add new message'}
          <br/>
          <input 
            type="text" 
            ref={ node => { this.input = node }}
          />
          <button className={styles.button} type="submit">Save</button>
        </form>
      </div>
    );
  }
}