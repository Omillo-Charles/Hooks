import React, { useState } from 'react'
import './StateDiv.css'

const StateDiv = () => {

    const [show,setShow] = useState("");
    const DivShow = ()=>{
        switch(show){
            case "MaleA":return <h1>Male Team A.</h1>;
            case "MaleU21":return <h1>Male under 21.</h1>;
            case "WomenA":return <h1>Women team A.</h1>;
            case "WomenU21":return <h1>Women under 21.</h1>
        }
    }
  return (
    <div className='StateDiv'>
      <div className="left scrollable">
        <div className="button1" onClick={()=>{setShow("MaleA")}}>
            <h2>Men's team A</h2>
        </div>

        <div className="button2" onClick={()=>{setShow("MaleU21")}}>
            <h2>Men Under 21</h2>
        </div>

        <div className="button3" onClick={()=>{setShow("WomenA")}}>
            <h2>Women team A</h2>
        </div>

        <div className="button4" onClick={()=>{setShow("WomenU21")}}>
            <h2>Women Under 21</h2>
        </div>
      </div>

      <div className="right-Content scrollable">
        {DivShow()}
      </div>
    </div>
  )
}

export default StateDiv
