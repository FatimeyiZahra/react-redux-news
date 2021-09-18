import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allCategory:[]
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Set_All_Category:
      return state = { ...state, allCategory: action.payload }
    default:
      return state;
  }
};

export default CategoryReducer;
