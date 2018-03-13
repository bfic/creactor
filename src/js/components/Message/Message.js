import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { deleteMessage } from './../../../redux/actions';
import MessageEditContainer from './../../../redux/containers/MessageEditContainer';

let styles = require('./style.scss');

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editActive: false
    };


    this.handleEditClick = this.handleEditClick.bind(this);
  }

  static propTypes: {
    deleteMessage: PropTypes.func.isRequired,
    obj: PropTypes.object.isRequired
  };


  handleEditClick () {
    this.setState({
      editActive: !this.state.editActive
    });
  }

  handleDeleteClick () {
    this.props.deleteMessage(this.props.obj.id);
  }

  render () {
	  return (
	    <div className={styles.message} >
        <div className={styles.inner}>
          <div className={styles.text}>
            {this.props.obj.text}
          </div>

          <button className={styles.button} onClick={this.handleEditClick} >Edit</button>
          <button  
            className={styles.button}
            onClick={e => {
              e.preventDefault()
              // dispatch(deleteTodo())

              this.props.deleteMessage(this.props.obj.id);
            }}
          >Delete</button>
        </div>
        {this.state.editActive &&
          <MessageEditContainer obj={this.props.obj} />
        }
	    </div>
	  );
  }
}
 