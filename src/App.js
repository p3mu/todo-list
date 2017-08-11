import React, { Component } from 'react'
import DisplayList from './DisplayList'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      todos: [
        { title: 'main', done: false, id: 1 },
        { title: 'payer', done: false, id: 2 },
        { title: 'fahad', done: false, id: 3 }
      ]
    }
  }

  render () {
    return (
      <div>

        <h1>ToDo list</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            id='inpuut'
            onChange={this.handleChange.bind(this)}
            value={this.state.title}
          />
          <button id='submit'>submit</button>
        </form>

        <DisplayList
          handleDone={this.handleDone.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          todos={this.state.todos}
        />

        <footer>
          All:&nbsp;{this.state.todos.length} |
          Completed:&nbsp;
          {this.state.todos.filter(todo => todo.done).length} |
          Pending:&nbsp;
          {this.state.todos.filter(todo => !todo.done).length} |
          <button onClick={this.handleClearCompleted.bind(this)}>
            Clear completed
          </button>
        </footer>

      </div>
    )
  }

  handleDone (titletoBeMarledAsDone) {
    var _todos = this.state.todos
    var todo = _todos.filter(todo => {
      return todo.id === titletoBeMarledAsDone
    })[0]

    todo.done = !todo.done

    this.setState({ todo: _todos })
  }

  handleDelete (titleToBeDelete) {
    var newtodos = this.state.todos.filter(todo => {
      return todo.title !== titleToBeDelete
    })
    this.setState({ todos: newtodos })
  }

  handleSubmit (event) {
    event.preventDefault()

    var title = this.state.title
    var newtodos = this.state.todos.concat({ title: title, done: false })
    this.setState({
      title: '',
      todos: newtodos
    })
  }

  handleChange (event) {
    this.setState({
      title: event.target.value
    })
  }

  handleClearCompleted (event) {
    var newTodos = this.state.todos.filter(todo => {
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }
}

export default App
