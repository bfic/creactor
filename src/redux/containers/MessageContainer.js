import { connect } from 'react-redux'
import Message from './../../js/components/Message/Message';
import { deleteMessage } from './../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteMessage: (id) => {
      dispatch(deleteMessage(id));
    }
  }
}

const MessageContainer = connect(null, mapDispatchToProps)(Message)
export default MessageContainer;
