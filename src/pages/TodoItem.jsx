import React from 'react'

function TodoItem({todoItem,handledone,handledelete}) {
  return (
    //  <div>
     <div key={todoItem.id} className='todoitem'> 
      {/* {console.log("todo item entered")} */}
        <h3>{todoItem.Name}</h3>
        <p>{(todoItem.CreatedOn)}</p>
        <p>{todoItem.TargetedOn}</p>
        {/* <p>{todoItem.isComplete}</p> */}
        {!todoItem.isComplete ? <button className='otherbuttons' onClick={()=>{handledone(todoItem)}} style={{backgroundColor:"red"}} >Complete</button> : <button className='otherbuttons' onClick={()=>{alert('Already completed')}} style={{backgroundColor:"green"}} >Completed</button>}
        <button  className='otherbuttons' onClick={()=>{handledelete(todoItem)}} >Delete</button>
       
        
       
    </div>
  )
}

export default TodoItem