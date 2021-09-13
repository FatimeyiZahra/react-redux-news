import { combineReducers } from "redux";
import CategoryReducer from "../reducers/CategoryReducer";
import NewsByCategoryIdReducer from "../reducers/NewsByCategoryIdReducer";

const rootReducers = combineReducers({
  CategoryReducer,
  NewsByCategoryIdReducer,
})
export default rootReducers;
