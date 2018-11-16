import React, { Component } from 'react'

class PopFather extends Component {
    constructor (props) {
        super (props)
        this.state = {
            isshow: true
        }
    }
    fatherclick = () => {
        this.setState({
            isshow: !this.state.isshow
        })
    }
    render () {
        return (
            <div>
                <button onClick = {this.fatherclick}>滚出来/滚回去</button>
                <PopSon isshow = {this.state.isshow}/>
            </div>
        )    
    }
}


class PopSon extends Component {
    constructor (props) {
        super (props)
        this.state = {
            show: true
        }
    }
    //改变props的时候执行
    componentWillReceiveProps (props) {
        if ( props.isshow === this.state.show) {
            console.log(1) 
            this.setState({ show: !props.isshow })
        } else {
            this.setState({ show: props.isshow })
        }
    }
    click = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render () {
        return (
            <div>
                <div style={{width: '200px', height: '200px', border: '1px solid black',display: this.state.show ? 'block' : 'none'}}>
                    <button onClick = {this.click}>X</button>
                    这是一个弹出框，
                    当我想让他弹出的时候他就会弹出
                </div>
            </div>
        )
    }
}


export default PopFather