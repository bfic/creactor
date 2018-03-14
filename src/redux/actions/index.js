import { 
  ADD_MESSAGE, 
  DELETE_MESSAGE, 
  UPDATE_MESSAGE,
  REQUEST_MESSAGES,
  RECEIVE_MESSAGES,
} from "../constants/action-types";
import { asyncLocalStorage } from './../../helpers/utils.js'

export const addMessage = (id, text) => ({
  type: ADD_MESSAGE,
  id: id,
  text
})

export const deleteMessage = id => {
  return {
    type: DELETE_MESSAGE,
    id: id
  }
}

export const updateMessage = obj => {
  return {
    type: UPDATE_MESSAGE,
    obj: obj
  }
}


/* Async methods */
function requestMessages(data) {
  return {
    type: REQUEST_MESSAGES,
  }
}


function receiveMessages(data) {
  data = JSON.parse(data);
  return {
    type: RECEIVE_MESSAGES,
    messageList: data.messageList,
    receivedAt: Date.now()
  }
}








// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
 
export function fetchMessages() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
   
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
     
    dispatch(requestMessages())

    asyncLocalStorage.getItem('applicationState').then((response) => {
      if (response == null ||  response == '{}' || response == undefined) {
        localStorage.setItem('applicationState', JSON.stringify({
          'messageList': [],
        }));
      } 
      return response;
    }).then((response) => {
      dispatch(receiveMessages(response))
    });



    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.
     
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
     /*
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        response => response.json(),
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
          error => console.log('An error occurred.', error)
          )
      .then(json =>
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
           
          dispatch(receivePosts(subreddit, json))
      )*/
  }
}