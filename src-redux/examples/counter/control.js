import React, { Component } from 'react'
import store from '../../store'
import actionCreators from '../../store/counter/actionCreatros'

class CounterControl extends Component {
    render () {
        return (
            <div className = 'text-center'>
                <p>
                    <button onClick = {() => {
                        store.dispatch(actionCreators.addother(2))
                    }} className = 'btn btn-danger'>+2</button>
                </p>
                <p>
                    <button onClick = {() => {
                        store.dispatch(actionCreators.addother(-2))
                    }} className = 'btn btn-warning'>-2</button>
                </p>
                <p>
                    <button onClick = {() => {
                        store.dispatch(actionCreators.randomCount())
                    }} className = 'btn btn-success'>random</button>
                </p>
            </div>
        )
    }
}

export default CounterControl