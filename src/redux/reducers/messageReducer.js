import { ADD_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from "../constants/action-types";

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]

    case DELETE_MESSAGE:
      return state.filter(message => message.id !== action.id);

    case UPDATE_MESSAGE:
      return state.map(message => {
        if (message.id === action.id)  {
          let newObj = Object.assing({}, message);
          newObj.text = action.text;
          return newObj;
        } else {
          return message
        }
      })

    default:
      return state;
  }
};

export default messageReducer;