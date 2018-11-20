import React , { Component } from 'react'
import TodoItem from './TodoItem'

class TodoContent extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        //会接收到todos和title将他们解构
        let { todos, title } = this.props
        return (
        <div className="todo-content">
            <h3>{ title } <span className="label label-primary pull-right">{ todos.length }</span> </h3>
            <ul className="list-group">
                { this.renderItems() }
            </ul>
        </div>
        )
    }

    renderItems () {
        return this.props.todos.map( item =>  <TodoItem 
            item = {item}
            key = {item.id}
        />)
    }
}

export default TodoContent