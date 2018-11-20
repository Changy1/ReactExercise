import React, { Component } from 'react'


class TemperatureInput extends Component {
    constructor (props) {
        super(props)
        this.state = {
            c: '摄氏度',
            f: '华氏度'
        }
    }

    render () {
        let type = this.props.type
        return (
            <div>
                <legend>输入{this.state[type]}数值</legend>
                {/* 其实这里就是先启动了input的onchange事件改变了父组件的temperature然后子组件的value就是父组件传递过来的，所以改变 */}
                <input value={this.props.temperature}
                    onChange = { (e) => { this.props.onTemperatureChange(e.target.value)}} />
            </div>
        )
    }
}

export default TemperatureInput 