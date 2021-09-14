import * as actionTypes from "./actionTypes";

export const getNewsByCategoryId = (newsByCategoryId) => ({
  type: actionTypes.Get_News_By_Category_Id,
  payload: newsByCategoryId,
});
