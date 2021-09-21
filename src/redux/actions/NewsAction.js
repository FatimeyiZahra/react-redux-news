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
export const setNewsDetails=(id)=>dispatch=>{
  // console.log(id)
  axios
  .get(`https://localhost:44313/V1/News/news/${id}`)
  .then((res)=>{
    dispatch({type:actionTypes.Set_News_Details,payload:res.data})
  })
}

// export const editNewsDetails=(id,push)=>dispatch=>{
//   axios.put(`https://localhost:44313/V1/News/${id}`)
//   .then(res=>{
//     dispatch({type:actionTypes.Edit_News_Details,payload:res.data})
//     push(`https://localhost:44313/V1/News/${id}`);
//   })
// }