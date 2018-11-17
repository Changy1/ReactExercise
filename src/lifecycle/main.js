import React, { Component } from 'react'

class Running extends Component {
    constructor (props) {
        super (props)
        this.state = {
            color: 'green'
        }
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor (color) {
        this.setState({ color })
    }
    render () {
        return (
            <section>
                <button>red</button>
                <ContentBlock />
            </section>
        )    
    }
}

class ContentBlock extends Component {
    constructor ( props ) {
        super (props)
        this.state = {
            width: '100px',
            height: '100px',
            backgroundColor: this.props.color
        }
    }
    render () {
        return (
            <div style = {this.state.style}>
            </div>
        )
    }
}

export default Running

