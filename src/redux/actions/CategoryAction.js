import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setAllCategory = () => dispatch=>{
 axios.get("https://localhost:44313/V1/News/categories")
 .then((res)=>{
   dispatch({type:actionTypes.Set_All_Category,payload:res.data})
 })

};
