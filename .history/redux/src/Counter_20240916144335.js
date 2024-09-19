import React from "react";
import { INCREMENT,DECREMENT } from "./action";
import { useSelector,useDispatch } from "react-redux";
function Counter(){
const count = useSelector((state)=>state.count)
const dispatch = useDispatch();
console.log(count)
return(
  <>
  <div>{count}</div>
 <button onClick={()=>dispatch(INCREMENT())} >ADD</button>
 <button onClick={()=>dispatch(DECREMENT())}>DEL</button>
  </>
)
}
export default Counter;
