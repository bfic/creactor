import { connect } from 'react-redux'
import MessageForm from './../../js/components/MessageForm/MessageForm';
import { addMessage } from './../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addMessage: (id, text) => {
      dispatch(addMessage(id, text));
    }
  }
}

const MessageFormContainer = connect(null, mapDispatchToProps)(MessageForm)
export default MessageFormContainer;