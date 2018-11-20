import React , { Component, } from 'react'
import TodoContent from './TodoContent'
import store from '../store'
import action from '../store/action'

class TodoList extends Component {
    constructor (props) {
        //接收属性
        super(props)
        //定义状态
        this.state = {
            id: 2,
            _todos: store.getState().todos,
            types: [
                { id: 1, title: '未完成', type: false},
                { id: 2, title: '已完成', type: true}
            ]
        }
    }
    componentWillMount () {
        store.subscribe(() => {
            this.setState({
                _todos: store.getState().todos
            })
        })
    }

    render () {
        return (

        <div className="container todo-box">
            <h1 className="text-center"> ToDoList—最简单的待办事项列表 </h1>

            <input onKeyUp = { this.handleInputSync } v-model = "new_title" type="text" className="form-control"/>
            
            { this.renderContent() }
        </div>
        )
    }

    renderContent () {
        let { types } = this.state
        return types.map(item => <TodoContent key = {item.id}
            todos = { this.correctTodos(item.type) }
            title = { item.title }
        /> )

    }
    
    // 生成已完成或者未完成的数据
    correctTodos (type) {
        return this.state._todos.filter(todo => todo.isFinished === type)
    }

    handleInputSync = (e) => {
        if ( e.keyCode === 13 ) {
            let title = e.target.value
            let obj = {
                id: ++ this.state.id ,
                title,
                isFinished: false
            }
            store.dispatch(action.addtodos(obj)) 
        } 
    }


}

export default TodoList