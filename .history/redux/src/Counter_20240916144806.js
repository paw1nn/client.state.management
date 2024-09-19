import React from "react";
import { INCREMENT,DECREMENT } from "./action";
import { useSelector,useDispatch } from "react-redux";
import { count } from "console";
export const Counter=({count,INCREMENT,DECREMENT})=>{
return(
  <>
  <div>{count}</div>
 <button onClick={INCREMENT} >ADD</button>
 <button onClick={DECREMENT}>DEL</button>
  </>
)
}
const mapStateToProps  = state =>( {count:{state.count}})
