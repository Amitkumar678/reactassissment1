import React, { Component } from 'react'
import Classcompo from './Classcompo';
import FunctionA from './FunctionA';
import "./style.css";
 class App extends Component {
  state={
    funF:false,
    classC:false,
  }
  render() {
    return (
      <div className='funA'>
        <h1> Styling using function and class component</h1>
        <button onClick={()=>this.setState({funF:!this.state.funF})} className="btn1">To see styling using function component</button>
        <button onClick={()=>this.setState({classC:!this.state.classC})} className="btn2">To see styling using class component</button>
        {this.state.funF && <FunctionA />}
        {this.state.classC && <Classcompo />}
      </div>
    )
  }
}

export default App
