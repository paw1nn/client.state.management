import React from "react";
import { INCREMENT,DECREMENT } from "./action";
import { useSelector,useDispatch } from "react-redux";
import { stat } from "fs";
import { runInThisContext } from "vm";
function App(){
const count = useSelector((state)=>state.count)

const dispatch = useDispatch();
return(
  <>
  <div>{count}</div>
 <button onClick={()=>dispatch(INCREMENT())} >ADD</button>
 <button onClick={}></button>
  </>
)
}
export default App;
