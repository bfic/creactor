import React, { Component } from 'react';
import PropTypes from 'prop-types';

let styles = require('./style.scss');


export default class MessageEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.obj.text, //setting default input value to obj.text from props */
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render () {
    return (
      <div className={styles.messageEdit} >
        <form onSubmit={e => {
            e.preventDefault()
            if (!this.state.input.trim()) {
              return
            }
            let obj = {
              id: this.props.obj.id,
              text: this.state.input
            }
            this.props.updateMessage(obj);
          }}
        >
          {'Edit message: '} {this.props.obj.id}
          <br/>
          
          <input 
            value={this.state.input}
            onChange={this.handleInputChange}
            type="text" 
          />
          <button className={styles.button} type="submit">Save</button>
        </form>
      </div>
    );
  }
}