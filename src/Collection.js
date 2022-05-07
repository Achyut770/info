import React from "react"
import list from "./List"
import Storage from "./Storage"

export default function Collection(props) {
    const [input , setInput] = React.useState("")
    
    if (input !== list.title){
          
    }
    
    const Search = list.filter((val)=>{
            if (input===""){
                return val
            } else  if(val.title.toLowerCase().includes(input.toLowerCase())){
                return val
            }
    })
    return (
        <div>
      Search: <input type="Search" onChange={(event)=>{
           setInput(event.target.value)
       }} value={input} placeholder="Search..." />
        <div className="Column">
    {Search.map((items)=>{
        return <Storage
              id= {items.id}
     title= {items.title}
     author ={items.author}
     price ={items.price}
    img= {items.img}
    handleClick={props.handleClick}
            />
       })}
       </div>
       
        </div>
    )
}