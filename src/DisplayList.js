import React from 'react'
import DisplayItem from './DisplayItem'

class DisplayList extends React.Component {
  render () {
    return (
      <ul>
        {this.props.todos.map((todo, i) => {
          return (
            <DisplayItem
              key={todo.title}
              todo={todo}
              handleDone={this.props.handleDone}
              handleDelete={this.props.handleDelete.bind(null, todo.title)}
            />
          )
        })}
      </ul>
    )
  }
}
export default DisplayList
