import * as actionTypes from "./actionTypes";

export const getNewsByCategoryId = (newsByCategoryId) => ({
  type: actionTypes.Get_News_By_Category_Id,
  payload: newsByCategoryId,
});

export const getAllNews=(allNews)=>({
  type:actionTypes.Get_All_News,
  payload:allNews,
});

export const getNewsDetails=(newsDetails)=>({
  type:actionTypes.Get_News_Details,
  payload:newsDetails,
})