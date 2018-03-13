import { connect } from 'react-redux'
import MessageList from './../../js/components/MessageList/MessageList';

const mapStateToProps = (state) => ({
  messageList: state.messageList
})


const MessageListContainer = connect(
  mapStateToProps,
  null
)(MessageList)

export default MessageListContainer