import React, { Component } from 'react'

class HideTodo extends Component {

    render() {
        return (
            <div>
                <p style={hideStyle}>
                <input  type ="checkbox" onChange={this.props.hideTodo}/> {" "}
                Hide checked
                </p>
            </div>
        )
    }
}
const hideStyle ={
    background: '#444',
    color: '#fff',
    textAlign: 'right',
    padding: '10px'
}

export default HideTodo
