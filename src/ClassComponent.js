import './App.css';
import profil from "./profil.jpg";

import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props){
    super(props)
    this.state  = {
      name: "Dhouha",
      age: 26,
      bio: "Tunisian girl",      
      profession: "Embedded system engenieer",
      show: false,
      count:0,
    };
   const interval = setInterval(() => {
    this.setState({count: this.state.count+1})
  }, 1000);
}
  render() {
    const ShowFun = () => {
      this.setState({ show: !this.state.show });
    };
    const add = () => {
      this.setState({ input: this.state.input+1 });
    };
    return (
      <div className="container">
      {this.state.show ? (
        <p className="text">
          My name is {this.state.name}, I'am {this.state.age} years old and i am an {this.state.profession}<br></br>
          I'am a  {this.state.bio} <br></br><img src={profil} id="img-change" alt={this.state.imageAlt} width="300px"/>  <br></br>
          {this.state.count}
        </p>
      ) : null}
     
      <button onClick={ShowFun}>Click me</button>
    </div>
  );
}
}

