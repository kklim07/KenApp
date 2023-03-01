import { ADD_ITEM, DELETE_ITEM } from "..actionTypes/actionTypes/userTypes.js";

const initialState = {
  numOfItems: 0,
};

export default const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};