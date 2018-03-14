import { connect } from 'react-redux'
import MessageList from './../../js/components/MessageList/MessageList';

const mapStateToProps = function (state) {
  let messageList = (state.messageReducer.messageList) ? state.messageReducer.messageList : [];
  return ({
    messageList: messageList,
    isFetching: true,
  })
}


const MessageListContainer = connect(
  mapStateToProps,
  null
)(MessageList)

export default MessageListContainer