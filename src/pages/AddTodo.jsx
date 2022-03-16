import React,{useState} from 'react';
import axios from 'axios';
// import {Input,Button, DatePicker} from 'antd';
// import 'antd/dist/antd.css';



function AddTodo({setCurrentView}) {

  const [todo,setTodo]=useState({
    Name:"",
    CreatedOn:"",
    TargetedOn:'',
    isComplete:false,
  })

  const [IsLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(null)

  const submitHandler=(e)=>{
    {console.log("form submitted")}
    e.preventDefault();
    const data={...todo,CreatedOn:new Date(),isComplete:false}
    setIsLoading(true)
    axios.post("http://localhost:5000/todos",data)
      .then(()=>{
        setIsLoading(false)
        setCurrentView("Home")
      }
      )

      .catch((error)=>{
        setIsLoading(false)
        setError(error)
      })
 
  }

  if (IsLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>{error.message}</p>
  }

  return <div>
       <form onSubmit={submitHandler}>
         <p className='message'><b>Enter your Task and Traget date</b></p>
         <label><b>Task:</b></label>
         <input type="text" required value={todo.Name} onChange={(e)=>{setTodo(prev=>({...prev,Name:e.target.value}))}}/>
         <br/>
         <label><b>Targeted on:</b></label>
         <input type="date" required value={todo.TargetedOn} onChange={(e)=>{setTodo(prev=>({...prev,TargetedOn:e.target.value}))}}/>
         <br/>
         <button className='otherbuttons'><b>Submit</b></button>
       </form>
  </div>;
}

export default AddTodo;
