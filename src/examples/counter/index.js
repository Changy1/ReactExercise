import React, { Component } from 'react'
/* import store from '../../store' */
import store from '../../store'
import actionCreators from '../../store/counter/actionCreatros'
import CounterControl from './control'
import CounterView from './view'

class Counter extends Component {
    constructor () {
        super()
        this.state = {
            count: store.getState().count
        }
        this.addone = this.addone.bind(this)
    }
    componentWillMount() {
        // subscribe会返回一个函数，返回的函数执行可以注销这个监听器
        let unlistener = store.subscribe(() => {
            this.setState({ count: store.getState().count })
        })
        /* setTimeout( () => {
            // 这样写可以注销这个监听器
            unlistener() 
        }, 500) */
    }
    render () {
        return (
            <div className = 'panel panel-primary'>
                <div className = 'panel-heading'>
                    计算器案例-Redux
                </div>
                <div className = 'panel-body'>
                    <h1 className = 'text-center'>count: <mark>{ this.state.count }</mark></h1>
                    <CounterView />

                    <p className = 'text-center'>
                        <button onClick = {this.addone} className = 'btn btn-primary'>+1</button>
                    </p>
                    <CounterControl />

                </div>
            </div>
        )
    }
    addone = () => {
        store.dispatch(actionCreators.addone())
    }
}

export default Counter