import React , { Component, } from 'react'
import TodoContent from './TodoContent'

class TodoList extends Component {
    constructor (props) {
        //接收属性
        super(props)
        //定义状态
        this.state = {
            id: 2,
            _todos: [
                { id: 1, title: '杀人放火抢银行', isFinished: false },
                { id: 2, title: '天黑路滑车子没闸', isFinished: true}
            ],
            types: [
                { id: 1, title: '未完成', type: false},
                { id: 2, title: '已完成', type: true}
            ]
        }
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
        let { _todos, types } = this.state
        //返回一个新的数组，react里面循环的时候可以使用数组，[]内容会被拆开放到虚拟DOM里面
        return types.map(item => <TodoContent key = {item.id}
            todos = { this.correctTodos(item.type) }
            title = { item.title }
            changeFinished = { this.changeFinished }
            removeTodo = { this.removeTodo }
            updateTitle = { this.updateTitle }
        /> )

    }

    //属性初始化器，这样写就不需要再去bind，但是传参的话必须写bind，所以需要传参就没必要写了
    handleInputSync = (e) => {
        if ( e.keyCode === 13 ) {
            let title = e.target.value
            this.setState( prevState => {
                prevState._todos.push({
                    id: ++ this.state.id ,
                    title,
                    isFinished: false
                })
                return prevState            //将state的todos改变然后返回整个state他就重新设置了
            }) 
        } 
    }

    // 生成已完成或者未完成的数据
    correctTodos (type) {
        //将todos根据type的类型分离成两个数组
        return this.state._todos.filter(todo => todo.isFinished === type)
    }

    // 切换完成状态
    changeFinished = (id) => {
        //在孙子组件传入一个id 对比当前数组的id 如果相同的话就改变isFinished
        this.state._todos.forEach( item => {
            if ( item.id === id ) item.isFinished = !item.isFinished
        })
        this.setState({ _todos: this.state._todos })
    } 

    //删除数据
    removeTodo = (id) => {
        this.setState({
            _todos: this.state._todos.filter( item => item.id !== id )
        })
    }

    //更改title
    updateTitle = (title, id) => {
        this.state._todos.forEach(item =>{
            if ( item.id === id ) {
                item.title = title
            }
        })

        this.setState({ _todos: this.state._todos }) 
    }
}

export default TodoList