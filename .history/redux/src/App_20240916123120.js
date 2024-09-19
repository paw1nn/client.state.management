import React from "react";
import { INCREMENT,DECREMENT } from "./action";
import { useSelector,useDispatch } from "react-redux";
import { stat } from "fs";
function App(){
const count = useSelector((state)=>stat)

}
export default App;
