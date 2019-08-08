import React, { Component } from 'react'


class AddTodo extends Component {
    state ={
        title: ""
    }

    //takes title and makes new todo, clears the bar
    onSubmit = (e)=> {
        e.preventDefault();
        if (this.state.title.length >10){
            this.props.addTodo(this.state.title);
        }
        else{
            window.alert("Please input a todo of more than 10 characters")
        }
        this.setState({title: " "});
    }

    //saves title
    onChange=(e)=>this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
           <form onSubmit={this.onSubmit} style ={{display: "flex"}}>
               <input 
                type="text" 
                name="title"
                style={{flex:"10", padding:"5px"}}
                placeholder="Add Todo with more than 10 characters ..."
                value={this.state.title}
                onChange={this.onChange}
               />
               <input 
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: "1"}}
               />
           </form>
        )
    }
}

export default AddTodo
