import { combineReducers } from "redux";
import CategoryReducer from "../reducers/CategoryReducer";
import NewsByCategoryIdReducer from "../reducers/NewsByCategoryIdReducer";
import AllNewsReducer from "../reducers/AllNewsReducer";
import NewsDetailsReducer from "../reducers/NewsDetailsReducer";

const rootReducers = combineReducers({
  CategoryReducer,
  NewsByCategoryIdReducer,
  AllNewsReducer,
  NewsDetailsReducer
})
export default rootReducers;
