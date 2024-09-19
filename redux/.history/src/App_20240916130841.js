import React from "react";
import { INCREMENT,DECREMENT } from "./action";
import { useSelector,useDispatch } from "react-redux";
function App(){
const count = useSelector((state)=>state.count)
const dispatch = useDispatch();
console.log(c)
return(
  <>
  <div>{count}</div>
 <button onClick={()=>dispatch(INCREMENT())} >ADD</button>
 <button onClick={()=>dispatch(DECREMENT())}></button>
  </>
)
}
export default App;
