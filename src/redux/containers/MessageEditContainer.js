import { connect } from 'react-redux'
import MessageEdit from './../../js/components/MessageEdit/MessageEdit';
import { updateMessage } from './../actions/index'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMessage: (id) => {
      dispatch(updateMessage(id));
    }
  }
}

const MessageEditContainer = connect(null, mapDispatchToProps)(MessageEdit)
export default MessageEditContainer;