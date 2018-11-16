import React, { Component } from 'react'
import Children from './children'

class Combination extends Component {
    constructor (props) {
        super (props)
        this.state = {

        }
    }
    render () {
        return (
            <div>
                这里相当于Vue的slot，直接将代码插入到组件中
                <Children>
                    <span>这一句是被插入的</span>
                </Children>
            </div>
        )
    }
} 

export default Combination