import React, { useState } from 'react'

const Todo = () => {

  const [inputvalue,setinptvalue]= useState("")   

  const [todo,setTodo] =useState([])
  const [index , setindex]= useState("")



 const todosss=()=>{
   console.log(inputvalue)
   todo.push(inputvalue)
     setTodo([...todo])
  //  setinptvalue=("")
 }

 const del =(e)=>{
   setTodo([])
   setinptvalue("")
   console.log(e)

 }

 const edits = (index)=>{
   const toDs = prompt("enter New Todo")
   todo.splice(index,1,toDs)
   console.log(index)
   setTodo([...todo])
 }
const dele=()=>{
  todo.splice(index,1)
  setTodo([...todo])
}





  return (
    <div>
   

        <div>
            <h1>Todo</h1>
        </div>
        <div className='w-50 mx-auto'>
        <input type="text"
               value={inputvalue}
                placeholder='Enter Your Todo' onChange={(e)=>setinptvalue(e.target.value)}
                className='my-5 form-control input-group' />
          <button className='btn btn-info pt-2 ml-3' onClick={todosss}>Add</button>
          <button className='btn btn-danger' onClick={del}>Delete</button>

        </div>
      
      


{todo.map((value,index,aray)=>{
  return(
<div  key={index} >
<ul>
         <li> {value} </li>
    
       
      </ul> 
          <button onClick={()=>dele(index)}  >dele</button>
        <button onClick={()=>edits(index)}>edit</button> 


      </div>


  )
}





)}

      


    </div>
  )
}

export default Todo

