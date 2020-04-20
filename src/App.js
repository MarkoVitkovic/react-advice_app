import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
  state = {
    advice: ''
  }

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('	https://api.adviceslip.com/advice')
    .then((res) => {
      const  {advice} = res.data.slip;
      this.setState({
        advice: advice
      })
    })
    .catch((err) => {console.log(err)})
  }

  render() {
    const {advice} = this.state;
    return (
      <div className="app">
            <h1>{advice}</h1>
      </div>
    )
  }
}

