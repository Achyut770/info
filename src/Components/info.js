import React from "react"
import "./info.css"
 
  export default function Info({items , Click}){
      console.log(items)
      return (
          <div className="Card_container">
          <div className="Card">
          <div className="image"><img src={items[0].img}  alt="#" /></div>
          <span>Title:{items[0].title}</span>
          <span>Author:{items[0].author}</span>
          <span>  Price:{items[0].price}$</span>
          <button onClick = {Click}>Back</button>
          </div>
          </div>
      )
  }