import React , { Component } from 'react'
import store from '../store'
import action from '../store/action'

class TodoItem extends Component {
    constructor (props) {
        super (props)

        this.state = {
            isUpdate: false
        }
    }
    // 这里是点击span然后input出现
    isChanged = () => {
        this.setState({
            isUpdate: !this.state.isUpdate
        })
        if( !this.state.isUpdate ) {
            setTimeout( () => {             //这里因为setState是异步的， 所以还没有出来input所以无法给他自动获取焦点
                this.refs.input.focus()     //需要使用setTimeout(0)
            })
        }
    }
    //input失去焦点的时候改变title
    handlerBlur = (e) => {
        let { id } = this.props.item
        this.isChanged()
        let title = e.target.value
        store.dispatch(action.updateTitle(title, id))
    }

    render () {
        let { item } = this.props
        return (
            <li className="list-group-item">
                <div className="row">
                    <input onChange = { () => store.dispatch(action.changeFinished(item.id)) } defaultChecked = { item.isFinished } className="col-xs-1" type="checkbox" />
                    <div className="title col-xs-8">
                        {
                            this.state.isUpdate ? <input onBlur = {this.handlerBlur} ref = {'input'} type="text" defaultValue = {item.title}/> : <span onClick = {this.isChanged}>{ item.title }</span>
                        }
                    </div>
                    <button onClick = { () => store.dispatch(action.removeTodo(item.id)) } type="button" className="close col-xs-1" ><span >&times;</span></button>
                </div>
            </li>
        )
    }
}

export default TodoItem