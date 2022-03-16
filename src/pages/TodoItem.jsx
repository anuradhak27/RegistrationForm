import React from 'react'

function TodoItem({todoItem,handledone,handledelete,totaldelete}) {
  return (
    //  <div>
     <div key={todoItem.id} className='todoitem'> 
      {/* {console.log("todo item entered")} */}
        <h3>{todoItem.Name}</h3>
        <p>{(todoItem.CreatedOn)}</p>
        <p>{todoItem.TargetedOn}</p>
        {/* <p>{todoItem.isComplete}</p> */}
        {!todoItem.isCompleted && <button className='otherbuttons' onClick={()=>{handledone(todoItem)}}>Completed</button>}
        <button  className='otherbuttons' onClick={()=>{handledelete(todoItem)}} >Delete</button>
       
        
       
    </div>
  )
}

export default TodoItem