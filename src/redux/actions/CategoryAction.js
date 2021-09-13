import * as actionTypes from "./actionTypes";

export const getAllCategory = (allCategory) => ({
  type: actionTypes.Get_All_Category,
  payload: allCategory,
});
