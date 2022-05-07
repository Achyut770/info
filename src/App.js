import React from "react"
import Collection from "./Collection"
import Info from "./Components/info"



export default function App() { 
    const [array , setArray] = React.useState([])
    const [show , setShow] = React.useState(true)
 
 
 const handleClick = (item) =>{
     setArray([item])
    setShow(false)
 }
function Click (){
    return setShow(true)
}
    return (
        <div>
        { show ? <Collection handleClick={handleClick} />:
           <Info items = {array} Click = {Click} />}  
        </div>
    )
}


