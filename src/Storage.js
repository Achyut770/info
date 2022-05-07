import React from "react"

export default function Storage(props){
    return(
        <div className="Row">
      <div>  <img src={props.img} alt="#" /> </div>
  <div> <span>{props.title}</span></div>
        
        <button onClick={()=>{
            props.handleClick(props)
        }}>MoreInfo</button>
        </div>
    )
}