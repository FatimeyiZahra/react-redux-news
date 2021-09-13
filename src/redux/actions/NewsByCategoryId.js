import * as actionTypes from "./actionTypes";

export const NewsByCategoryId = (newsByCategoryId) => ({
  action: actionTypes.Get_News_By_Category_Id,
  payload: newsByCategoryId,
});
