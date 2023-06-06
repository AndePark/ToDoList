import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';



class App extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        num: 1
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        num: this.state.task.num
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();

    const obj = {
      taskName: this.state.task.text,
      taskId: this.state.task.id,
      taskNum: this.state.task.num,
    };
    
    this.setState({
      tasks: this.state.tasks.concat(obj),
      task: {
        text: '',
        id: uniqid(),
        num: this.state.task.num +1
      },
    });
  };

  handleDelete = (id) => {
    this.setState({
      tasks: [...this.state.tasks].filter((task) => task.taskId !== id)
    });
  };

  render() {
    const { task, tasks} = this.state;

    return (
      <div>
        {/* form element with input and button element */}
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input 
            onChange={this.handleChange} 
            value={task.text} 
            type="text" 
            id="taskInput"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faThumbsUp}/>
          </button>
        </form>
        <Overview 
          tasks={tasks}
          deleteTask = {this.handleDelete}
        />
      </div>  
    );
  }
}

export default App;
