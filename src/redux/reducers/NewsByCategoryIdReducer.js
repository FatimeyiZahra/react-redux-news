import * as actionTypes from "../actions/actionTypes";
const initialState = [];

const NewsByCategoryIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Get_News_By_Category_Id:
      return state = { ...state, newsByCategoryId: action.payload }
    default:
      return state;
  }
};

export default NewsByCategoryIdReducer;
