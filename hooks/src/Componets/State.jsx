import React, { useState } from 'react'
import './State.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const State = () => {

    const currentYear = (new Date).getFullYear()
    const [count,setCount] = useState(currentYear);
    const AddCount =()=>{
        setCount(count+1);
    }

    const MinusCount =()=>{
        setCount(count-1);
    }
  return (
    <div className='useState'>
      <div className="back">
        <i class="bi bi-chevron-left" onClick={()=>{MinusCount()}}></i>
      </div>

      <div className="content">
        <p>{count}</p>
      </div>

      <div className="forward">
         <i class="bi bi-chevron-right" onClick={()=>{AddCount()}}></i>
      </div>
    </div>
  )
}

export default State
