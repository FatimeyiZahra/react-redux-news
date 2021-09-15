import * as  actionTypes from "../actions/actionTypes"
const initialState=[]

const AllNewsReducer = (state=initialState,action) => {
   switch (action.type) {
       case actionTypes.Get_All_News:
         return state={...state,allNews:action.payload}
   
       default:
           return state;
   }
}

export default AllNewsReducer
