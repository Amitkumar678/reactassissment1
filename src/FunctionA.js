import React from 'react'
import "./style.css";
const FunctionA = () => {
  return (
    <div className='para1'><h2>This is created using function component</h2> <p className='para2'>This is done using external css</p>
    <p style={{color:'red'}}>This is done using inline css</p>
    </div>
  )
}

export default FunctionA