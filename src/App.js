import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodos from './components/AddTodos';

class App extends Component {
    state={
        todos: [
            {
                id: 1,
                title: 'Take out the trash',
                completed: false
            },
            {
                id: 2,
                title: 'Dinner with wife',
                completed: true
            },
            {
                id: 3,
                title: 'Meeting with boss',
                completed: false
            }
        ]
    }


// Toogle complete
    markComplete = (id) =>{
        this.setState({ todos: this.state.todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        }) })
    }
    
    
    //delete a todo
    deleteTodo = (id)=>{
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }
    
    
    addTodo = (title) =>{
        const newTodo = {
            id: this.state.todos.length+1,
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }
    


    render(){
        return (
            <div className="App">
             <div className='container'>
                 <Header />
                 <AddTodos addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} markComplete={ this.markComplete } deleteTodo={ this.deleteTodo } />
             </div>
            </div>
          );
    }
}

export default App;
