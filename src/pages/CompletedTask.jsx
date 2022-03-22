import axios from "axios";
import React,{useEffect,useState} from 'react'
import CompletedTodos from "./CompletedTodos";



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
   
  return( 
  <div>
    {
     
      todos.map((todoItem)=>

      <CompletedTodos todoItem={todoItem} handledelete={handledelete}/>
      

      )
    }
  </div>
  )


}



export default ListTodos;
