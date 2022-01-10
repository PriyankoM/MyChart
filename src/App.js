import './App.css';
import React from 'react';
// import  Dash from './radardashboard/dash';
import Radarmap from './radardashboard/maps';
import Data from './dataj.json';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      fill:'sector',
      year:[2016,2020],
      sector:'all'
    }
  }

  handelstate=(e)=>{
    console.log(e.target.value);
    this.setState({fill:e.target.value})
  }
  handelyearstate=(e)=>{
    console.log(e.target.value)
  }

render(){
  return (
    <div>
      <Router>
      <Navbar fill={this.state.fill} handelyearstate={this.handelyearstate} handelstate={this.handelstate} yearval={this.year}/>
      </Router>
    <div className="App">
      <Radarmap params={Data} fil={this.state.fill} year={this.state.year} sector={this.state.sector} />
    </div>
    </div>
  )
}
}

export default App;
