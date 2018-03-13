import { ADD_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from "../constants/action-types";

let nextTodoId = 0
export const addMessage = (text) => ({
  type: ADD_MESSAGE,
  id: nextTodoId++,
  text
})

export const deleteMessage = id => {
  return {
    type: DELETE_MESSAGE,
    id: id
  }
}

export const updateMessage = id => {
  return {
    type: UPDATE_MESSAGE,
    id: id
  }
}