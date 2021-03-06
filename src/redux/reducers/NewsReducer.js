import * as actionTypes from "../actions/actionTypes";
const initialState = {
  news: [],
  newsDetails: [],
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.Set_News_Details:
      return (state = { ...state, newsDetails: action.payload });
    case actionTypes.Set_News_By_Category_Id:
      return (state = { ...state, newsByCategoryId: action.payload });
    case actionTypes.Set_All_News:
      return (state = { ...state, news: action.payload });
    case actionTypes.Set_All_Category:
      return (state = { ...state, allCategory: action.payload });
      case actionTypes.Edit_News_Details:
        return (state ={...state,newsDetails:{...state.newsDetails,...action.payload}});
    default:
      return state;
  }
};

export default NewsReducer;
