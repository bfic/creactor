import { connect } from 'react-redux'
import MessageEdit from './../../js/components/MessageEdit/MessageEdit';
import { updateMessage } from './../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMessage: (obj) => {
      dispatch(updateMessage(obj));
    }
  }
}

const MessageEditContainer = connect(null, mapDispatchToProps)(MessageEdit)
export default MessageEditContainer;