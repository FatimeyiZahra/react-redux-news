import { combineReducers } from "redux";
import CategoryReducer from "../reducers/CategoryReducer";
import NewsReducer from "../reducers/NewsReducer";

const rootReducers = combineReducers({
  CategoryReducer,
  NewsReducer

})
export default rootReducers;
