import React from "react";
import { INCREMENT,DECREMENT } from "./action";
import { useSelector,useDispatch } from "react-redux";
import Counter from "./Counter";
function App(){
const count = useSelector((state)=>state.count)
const dispatch = useDispatch();
console.log(count)
return(
  

<Counter count={count} INCREMENT={dispatch()}/>
  
)
}
export default App;
