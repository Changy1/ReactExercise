import React, { Component } from 'react'

class Children extends Component {
    constructor (props) {
        super (props)
        this.state = {

        }
    }
    render () {
        return (
            <div>
                <h1>这里是插入的哦</h1>
                {this.props.children}
                <div>哈哈</div>
            </div>
        )    
    }
}

export default Children