import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from "../reducers/index";

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

/* redux-tunk middleware provides async communication in redux actions */

/*
const store = createStore(
  rootReducer,
  { messageList: [] }
);
*/