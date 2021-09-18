import * as actionTypes from "./actionTypes";

import axios from "axios";

export const setNewsByCategoryId = (newsByCategoryId) => ({
  type: actionTypes.Set_News_By_Category_Id,
  payload: newsByCategoryId,
});

export const getAllNews=()=>dispatch=>{
  axios.get("https://localhost:44313/V1/News/AllNews")
  .then((res)=>{
    dispatch({type:actionTypes.Set_All_News,payload:res.data})
  })
}
// export const setAllNews = (allNews) => ({
//   type: actionTypes.Set_All_News,
//   payload: allNews,
// });

export const setNewsDetails = (newsDetails) => ({
  type: actionTypes.Set_News_Details,
  payload: newsDetails,
});

