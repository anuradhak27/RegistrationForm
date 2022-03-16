import React,{useState} from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const [currentView,setCurrentView]=useState("Home")

  return (
    <div>
     
      <Header/>
      <Navbar currentView={currentView} setCurrentView={setCurrentView}/>
      <Main currentView={currentView} setCurrentView={setCurrentView}/>
      <Footer/>
    </div>
  )
}

export default App;
