import axios from "axios";
import React,{useEffect,useState} from 'react'
import TodoItem from "./TodoItem";

function ListTodos() {
const [todos,settodos]=useState([])
const [error,setError]=useState(null)
const [loading,setLoading]=useState(true)

useEffect(()=>{
  setLoading(true)
  axios.get("http://localhost:5000/todos")
    .then((response)=>{
      settodos(response.data)
      
      setLoading(false)
    })
    .catch(()=>{
      setError(error)
      setLoading(false)
    })
    alert("you are in Home page")

  },[])

    if(loading){
      <span>Loading....</span>
    }

    if(error){
      <span>{error.message}</span>
    }

    const handledelete=(todoItem)=>{
      axios.delete("http://localhost:5000/todos/" +todoItem.id)
      .then(
        ()=>{settodos(prev=>(prev.filter(item=>item.id!=todoItem.id)))}
      )

    }

    const handledone=(todoItem)=>{
      axios.put("http://localhost:5000/todos/" +todoItem.id, {...todoItem,isCompleted:true})
      .then(
        (response) => {
            settodos(prev => prev.map(item => item.id === todoItem.id ? response.data : item))
        }
    )
      {console.log("refresh the json file")}
  //     axios.get("http://localhost:5000/todos")
  //     .then((response)=>{
  //       settodos(response.data)
  // }
  //     )
 
}

    const totaldelete=()=>{
      axios.delete("http://localhost:5000/todos")
     
      .then(
        ()=>{settodos({})}
      )
      console.log("you have deleted everything")

    }
    
  return( 
  <div>
    {/* {console.log("list todo entered")} */}
    {/* {console.log(todos)}  */}
    {
      todos.map((todoItem)=>
        
        <TodoItem todoItem={todoItem}
        handledone={handledone}
        handledelete={handledelete}
        totaldelete={totaldelete}
        /> 

      )
      
    }
   
     {/* {todos[todos.length-1] && <button className='otherbuttons' onClick={totaldelete}>Delete everything</button>}  */}

  </div>
  )
}

export default ListTodos;
