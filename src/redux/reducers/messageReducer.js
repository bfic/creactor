import { ADD_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";

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

    default:
      return state;
  }
};

export default messageReducer;