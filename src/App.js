import React, {Component} from 'react';
import HideTodo from"./components/HideTodo";
import Todos from "./components/Todos";
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import './App.css';


class App extends Component {

  state = {
    maxID: 3,
    todos: [
      {
        id: 1,
        title: 'Eat Breakfast',
        completed: false,
        isHidden: false
      },
      {
        id: 2,
        title: 'Workout',
        completed: false,
        isHidden: false
      },
      {
        id: 3,
        title: 'Sleep',
        completed: false,
        isHidden: false
      },
    ]

  }

  //Toggle Hide
  hideTodo =()=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.completed === true){
        todo.isHidden =! todo.isHidden
      }
      return todo;
    }) });
  }

  //Toggle Complete
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        //changes to opposite boolean value
        todo.completed = !todo.completed 
      }
      return todo;

    }) });
  }

  //Delete Todo
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id
      !== id)]})
  }
  
  //Add Todo
  addTodo = (title)=>{
    const newTodo = {
      id: this.state.maxID+1,
      title: title,
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTodo], maxID: this.state.maxID+1});
  }
  handleRLDDChange = (reorderedItems) => {
    this.setState({ todos: reorderedItems });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <HideTodo hideTodo={this.hideTodo}/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos = {this.state.todos} markComplete={this.markComplete} 
          delTodo={this.delTodo} handleRLDDChange={this.handleRLDDChange}/>
        </div>
      </div>
    );
  }

}
export default App;
