import React , { Component } from 'react'


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
            setTimeout( () => {
                this.refs.input.focus()
            })
        }
    }
    //input失去焦点的时候改变title

    handlerBlur = (e) => {
        let { id } = this.props.item
        this.isChanged()
        let title = e.target.value
        this.props.updateTitle( title, id )
    }

    render () {
        let { item, changeFinished, removeTodo } = this.props
        return (
            <li className="list-group-item">
                <div className="row">
                    <input onChange = { changeFinished.bind(null, item.id) } defaultChecked = { item.isFinished } className="col-xs-1" type="checkbox" />
                    <div className="title col-xs-8">
                        {
                            this.state.isUpdate ? <input onBlur = {this.handlerBlur} ref = {'input'} type="text" defaultValue = {item.title}/> : <span onClick = {this.isChanged}>{ item.title }</span>
                        }
                    </div>
                    <button onClick = { removeTodo.bind(null, item.id) } type="button" className="close col-xs-1" ><span >&times;</span></button>
                </div>
            </li>
        )
    }
}

export default TodoItem