//all todos together

import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
    //checks all instances of todos and gives todo id and title to TodoItem.js
    //sends mark complete boolean value or deleted todo and todo id up to App.js
    render(){
           return this.props.todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} 
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
                isHidden ={this.props.isHidden} />
           ));
    }
}

//Proptypes
Todos.propTypes ={
    todos: PropTypes.array.isRequired
}


export default Todos