import React, { Component } from 'react'
import "./style.css";
export class Classcompo extends Component {
  render() {
    return (
      <div className='paraC'>
      <h2> This is created using class component</h2>
      <p className='paraC1'>This is done using external css</p>
      <p style={{color:'red'}}>This is done using inline css</p>        
      </div>
    )
  }
}

export default Classcompo
