import './App.css';
import React, { useState } from 'react';
import Submited from './Submited';
import star from "./images/icon-star.svg"

function App() {
  const[show,setshow]=useState(true)
  const[value,setValue]=useState(0)
  const onsubmit=()=>{
    setshow(false)
}
const clickinteractive=(e)=>{
  const val =  e.target.getAttribute('value')
  if(e.target){
    e.target.classList.add("active")
  }
  setValue(val)
}
  return (
    <div className="App">
     {
      show?<main className='card'>
      <div className='star'><img src={star} alt="starimage"/></div>
       <div className='text-content'>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       </div>
       <div className='buttons'>
        <div className='btn' value="1" onClick={clickinteractive}>1</div>
        <div className='btn' value="2" onClick={clickinteractive}>2</div>
        <div className='btn' value="3" onClick={clickinteractive}>3</div>
        <div className='btn' value="4" onClick={clickinteractive}>4</div>
        <div className='btn' value="5" onClick={clickinteractive}>5</div>
       </div>
      
      <div className='submit' onClick={onsubmit} >SUBMIT</div>
    
     </main>:<Submited selected={value} sum={5}/>

     }
    </div>
   
  );
}

export default App;
