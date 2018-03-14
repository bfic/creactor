import { 
  ADD_MESSAGE, 
  DELETE_MESSAGE, 
  UPDATE_MESSAGE,
  REQUEST_MESSAGES,
  RECEIVE_MESSAGES
} from "../constants/action-types";

import { asyncLocalStorage } from './../../helpers/utils.js'

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newState = Object.assign({}, state);
      if (!newState.messageList) {
        newState.messageList = [];
      }
      newState.messageList.push({
        id: action.id,
        text: action.text,
      })

      // Save state data in localStorage
      asyncLocalStorage.setItem('applicationState', JSON.stringify(newState)).then((result) => {
      });

      return newState;

    case DELETE_MESSAGE:
      newState = Object.assign({}, state);
      let newMessageList = newState.messageList.filter(message => message.id !== action.id);
      newState.messageList = newMessageList;

      // Save state data in localStorage
      asyncLocalStorage.setItem('applicationState', JSON.stringify(newState)).then((result) => {
      });

      return newState;

    case UPDATE_MESSAGE:
      return state.map(message => {
        if (message.id === action.obj.id)  {
          let newObj = Object.assign({}, message);
          newObj.text = action.obj.text;
          return newObj;
        } else {
          return message
        }
      })

    case REQUEST_MESSAGES:
      return Object.assign({}, state, {
        isFetching: true,
      })


    case RECEIVE_MESSAGES:
      return Object.assign({}, state, {
        isFetching: false,
        messageList: action.messageList,
        lastUpdated: action.receivedAt
      })

    default:
      return state;
  }
};

export default messageReducer;