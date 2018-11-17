import React , { Component } from 'react'
import bus from './bus'

class Brother extends Component {
    constructor (props) {
        super (props)
        this.state = {
            money: 20
        }
        //给bus一个事件，当这个事件执行的时候就执行changeMoney这个事件
        bus.on('money',() => {
            this.changeMoney()
        })
    }
    changeMoney () {
        this.setState({ money: --this.state.money })
    }
    render () {
        return (
            <div>
                {this.state.money}
            </div>
        )
    }
}


class Sister extends Component {
    //当点击的时候触发button，button调用bus的money事件
    button () {
        bus.emit('money')
    }
    render () {
        return (
            <div>
                <button onClick = { this.button } ></button>
            </div>
        )
    }
}

//这样是将这两个东西分别暴露
export { Brother , Sister }
//这样是暴露一个对象
export default { Brother, Sister } 