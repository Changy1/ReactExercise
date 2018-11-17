import React, { Component } from 'react'

class Running extends Component {
    constructor (props) {
        super (props)
        this.state = {
            color: 'green'
        }
        this.changeColor = this.changeColor.bind(this)
        console.log('constructor-R')
    }
    componentWillMount () {
        console.log('componentWillMount-R')    
    }
    changeColor (color) {
        this.setState({ color })
    }
    render () {
        console.log('render-R')
        return (
            <section>
                <button onClick = {this.changeColor}>red</button>
                <ContentBlock color = {this.state.color}/>
            </section>
        )    
    }
    componentDidMount () {
        console.log('componentDidMount-R')
    }
}

class ContentBlock extends Component {
    constructor ( props ) {
        super (props)
        this.state = {
           style: {
                width: '100px',
                height: '100px',
                backgroundColor: this.props.color
           }
        }
        console.log('constructor-C') 
    }
    //比render先执行
    componentWillReceiveProps () {
        console.log('componentWillReceiveProps')
    }
    //这里可以阻止渲染，默认返回true，如果返回false就不执行render了
    shouldComponentUpdate () {
        console.log('shouleComponentUpdate')
        return true
    }
    componentWillMount () {
        console.log('componentWillMount-C')
    }
    render () {
        console.log('render-C')
        return (
            <div style = {this.state.style}>
            </div>
        )
    }
    componentDidMount () {
        console.log('componentDidMount-C')
    }
    componentDidUpdate () {
        console.log('componentDidUpdate-C')
    }
}

export default Running

