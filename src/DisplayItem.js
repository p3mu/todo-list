import React from 'react'
import './DisplayItem.css'

class DisplayItem extends React.Component {
  constructor () {
    super()
    this.state = { editing: false }
  }

  render () {
    var todo = this.props.todo
    var viewStyle = {}
    var editStyle = {}

    if (this.state.editing) {
      viewStyle.display = 'none'
    } else {
      editStyle.display = 'none'
    }

    return (
      <li className={todo.done ? 'done' : ''}>
        <div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>
          <input
            checked={todo.done}
            onChange={this.props.handleDone.bind(null, todo.id)}
            type='checkbox'
            style={{ fontSize: 'x-large' }}
          />

          <label>
            {this.state.changedText}
          </label>

          <button onClick={this.props.handleDelete.bind(null, todo.id)}>
            Delete
          </button>
        </div>

        <input
          type='text'
          onKeyDown={this.handleEditingDone.bind(this)}
          onChange={this.handleEditingChange.bind(this)}
          style={editStyle}
          value={this.state.changedText}
        />

      </li>
    )
  }
  componentDidMount () {
    this.setState({ changedText: this.props.todo.title })
  }

  handleEditing (event) {
    this.setState({ editing: true, changedText: this.props.todo.title })
  }

  handleEditingDone (event) {
    if (event.keyCode === 13) {
      this.setState({ editing: false })
    }
  }

  handleEditingChange (event) {
    var _changedText = event.target.value
    this.setState({ changedText: _changedText })
  }
}

export default DisplayItem
