import React, { Component } from 'react'



class AddTodo extends Component {
    
    state ={
        title: "",
        isValid: true
    }

    //takes title and makes new todo, clears the bar
    onSubmit = (e)=> {
        e.preventDefault();
        let isValid = this.state.title.length > 10;
        if (isValid){
            this.props.addTodo(this.state.title);       
        }

        this.setState({isValid});
        this.setState({title: " "});
    }

    //saves title
    onChange=(e)=>this.setState({ [e.target.name]: e.target.value});



    render() {
        let table, submitButton;
        if(this.state.isValid ===true){
            table =<input 
            type="text" 
            name="title"
            
            style={{flex:"6", padding:"5px"}}
            placeholder="Add Todo with more than 10 characters ..."
            value={this.state.title}
            onChange={this.onChange}
           />
           submitButton= <input 
           type="submit"
           value="Submit"
           className="btn"
           style={{flex: "1"}}
          />
        }
        else{
            table =<input 
            type="text" 
            name="title"
            style={{flex:"6", padding:"5px", borderColor:'red'}}
            placeholder="Error ..."
            value={this.state.title}
            onChange={this.onChange}
           />
           submitButton= <input 
           type="submit"
           value="More than 10 characters required"
           className="btn2"
           style={{flex: "1"}}
          />
        }
        return (
           <form onSubmit={this.onSubmit} style ={{display: "flex"}} >
               {table}
               {submitButton}
           </form>
        )
    }
}

export default AddTodo
