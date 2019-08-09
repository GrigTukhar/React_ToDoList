//all todos together

//all todos together

import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';



class Todos extends Component {
    constructor(props) {
        super(props);
        this.itemRenderer = this.itemRenderer.bind(this);
        this.handleRLDDChange = this.handleRLDDChange.bind(this);
      }
    render(){
        return (
            <RLDD
            items={this.props.todos}
            itemRenderer={this.itemRenderer}
            onChange={this.handleRLDDChange}
            /> 
        );
    }

    itemRenderer(todo) {
        return (
          <div >
            <TodoItem key={todo.id} todo={todo} 
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
                isHidden ={this.props.isHidden} />
          </div>
        );
    }

    handleRLDDChange(reorderedItems) {
        this.props.handleRLDDChange(reorderedItems);
    }
}

//Proptypes
Todos.propTypes ={
    todos: PropTypes.array.isRequired
}


export default Todos

 //checks all instances of todos and gives todo id and title to TodoItem.js
    //sends mark complete boolean value or deleted todo and todo id up to App.js