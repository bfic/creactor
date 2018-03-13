let nextTodoId = 0
export const addMessage = (text) => ({
  type: 'ADD_MESSAGE',
  id: nextTodoId++,
  text
})

export const deleteMessage = id => {
  return {
    type: 'DELETE_MESSAGE',
    id: id
  }
}