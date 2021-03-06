import React, { Component } from 'react';

class AddTodos extends Component{
    
    
    state = {
        title: ''
    }
    
    onchange = (e) => this.setState({ [e.target.name]: e.target.value });

    onsubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    
    render(){
        return(
            <form onSubmit={this.onsubmit} style={{display:'flex'}}>
                <input
                type="text"
                name="title"
                style={{flex:'10', padding:'5px'}}
                placeholder="Add Todo.."
                value={this.state.title}
                onChange={this.onchange}
                />
                <input
                type="submit"
                value="Add" 
                className="btn"
                style= {{flex:'1'}}
                />
            </form>
        )
    }
}

export default AddTodos;