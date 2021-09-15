import * as actionTypes from "../actions/actionTypes";
const initialState = [];

const NewsDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Get_News_Details:
      return (state = { ...state, newsDetails: action.payload });
    default:
      return state;
  }
};

export default NewsDetailsReducer;
