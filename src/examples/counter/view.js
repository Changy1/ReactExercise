import React, { Component } from 'react'
import store from '../../store'
class CounterView extends Component {
    state = {
        count: store.getState().count.count
    }
    componentWillMount () {
        store.subscribe(() => {
            this.setState({
                count: store.getState().count.count
            })
        })
    }
    render () {
        return (
            <div className = 'text-center'>
                <p>count: {this.state.count }</p>
            </div>
        )
    }
}

export default CounterView