import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from "../reducers/index";

const loggerMiddleware = createLogger()

/* 
  redux-logger is loggin previous and next state in caonsole
  redux-thunk middleware provides async communication in redux actions
*/

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