import React, { Component } from 'react'

class Clock extends Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date(),
            isValid: true
        }   
    }
    componentDidMount(){
        console.log("Hello")
        this.timerID=setInterval( ()=>this.tick(), 1000)
    }

    componentDidUpdate(prevProps){
        console.log("hi")
        if(prevProps != this.props){
            this.booleanChange()
            console.log(this.state.isValid)
        }
    }

    booleanChange(){
        this.setState({
            isValid: !this.state.isValid
        })
    }
    
    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render() {
        
        let time;
        if(this.state.isValid ===true){
            time=<h2 style={clockStyle}>Hello</h2>
        }
        else{
            time=<h2 style={clockStyle2}>Hello</h2>
        }
        return (
            <div style ={clockStyle}>
                {time}
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
const clockStyle ={
    background: '#444',
    color:"white",
    textAlign: 'center',
    padding: '10px'
}
const clockStyle2 ={
    background: '#444',
    color:"red",
    textAlign: 'center',
    padding: '10px'
}


export default Clock
