import React from "react";
import { INCREMENT,DECREMENT } from "./action";
import { useSelector,useDispatch } from "react-redux";
function App(){
const count = useSelector((state)=>state.count)
const dispatch = useDispatch();
console.log(count)
return(
  

<Coun
  
)
}
export default App;
