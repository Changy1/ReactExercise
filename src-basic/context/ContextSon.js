import React , { Component } from 'react'
import { Consumer } from './context'

class ContextSon extends Component {
    constructor ( props ) {
        super ( props )
        this.state = {

        }
    }
    a = ({money, changeMoney}) => {
        return (
<                   div>
                        {money}
                        <button onClick = {changeMoney}></button>
                    </div>
        ) 
    }
    render () {
        return (
            <Consumer>
                { value => (this.a(value)) }
            </Consumer>
        )
    }
}

export default ContextSon