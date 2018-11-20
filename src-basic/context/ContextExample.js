import React , { Component } from 'react'
import ContextControl from './ContextControl'
import { Provider } from './context'

class Contextexample extends Component {
    constructor ( props ) {
        super ( props )
        this.state = {
            money: 20
        }
    }
    changeMoney = () => {
        this.setState({ money: --this.state.money})
    }
    render () {
        return (
            <Provider value={{money: this.state.money , changeMoney: this.changeMoney}}>
                <div>
                    <ContextControl />
                </div>
            </Provider>
        )
    }
}

export default Contextexample