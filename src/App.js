import React, { Component } from 'react';
import './App.css'
import 'normalize.css'
import './reset.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: []
    }
  }
  render() {
    let todos = this.state.todoList.map((item,index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} />
        </li>
      )
    })
    return (
      <div className="App">
        <h1>ToDoList</h1>
        <div className = "inputWrapper">
          {/*注意value后面不要加引号*/}
          <TodoInput content={this.state.newTodo} 
                     onChange={this.changeTitle.bind(this)}
                     onSubmit={this.addTodo.bind(this)}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )
  }
  changeTitle (event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }
  addTodo (event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList:this.state.todoList
    })
    
  }
}

export default App;

let id = 0

function idMaker() {
  id += 1
  return id
}


