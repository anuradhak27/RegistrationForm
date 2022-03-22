import React,{useState} from 'react';
// import ListTodos from "../pages/ListTodos";
// import AddTodo from "../pages/AddTodo";
// import About from "../pages/About";


function Navbar({setCurrentView}) {


  return <div className='navbar'>
      <ul>
          <li ><button className='navbarbutton' onClick={()=>setCurrentView("Home")}>Home</button></li>
          <li ><button className='navbarbutton' onClick={()=>setCurrentView("create")}>Create Task</button></li>
          <li ><button className='navbarbutton' onClick={()=>setCurrentView("completedtasks")}>Completed Tasks</button></li>
          <li ><button className='navbarbutton' onClick={()=>setCurrentView("about")}>About</button></li>
      </ul>

  </div>;
}

export default Navbar;
