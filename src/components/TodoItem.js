//one individual todo in list

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle =() =>{
        return{
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            draggable: true,
            //following checks if completed boolean value is true or false
            textDecoration: this.props.todo.completed?
            "line-through" : "none",
            display: this.props.todo.isHidden?
            "none" : "block"
        }
    }



    render() {
        //destructuring of props, put props we want in brackets to use
        const { id, title} =this.props.todo;
        //takes id of completed mark or deleted todo send up to Todos.js
        //also title of todo printed
        return (
            <div style ={this.getStyle()}>
                <p>
                <input type ="checkbox" onChange={this.props.markComplete.bind (this, id)}/> {" "}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle={
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: 'right'
}

//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
