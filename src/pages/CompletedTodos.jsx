import React from 'react'

function CompletedTodos({todoItem,handledelete}) {

return(
  <>
    {todoItem.isComplete === true && <div key={todoItem.id} className='todoitem'>
    {/* { todoItem.isComplete === true && console.log(todoItem)} */}
      {todoItem.isComplete === true && <h3>{todoItem.Name}</h3>}
      {todoItem.isComplete === true && <p>{todoItem.CreatedOn}</p>}
      {todoItem.isComplete === true && <p>{todoItem.TargetedOn}</p>}
      {todoItem.isComplete === true && <button className='otherbuttons' onClick={()=>{alert('Task already completed')}} style={{backgroundColor:"green"}} >Completed</button>}
      {todoItem.isComplete === true && <button  className='otherbuttons' onClick={()=>{handledelete(todoItem)}} >Delete</button>}
    
      </div>}
  </>
  )
}




export default CompletedTodos