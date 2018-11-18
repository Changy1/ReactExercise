import React , { Component } from 'react'
import PropTypes from 'prop-types'

class Son extends Component {
    constructor (props) {
        super (props)
        this.state = { }
    }
    render () {
        return (
            <div>
                {this.props.num + 12}
            </div>
        )
    }
}

Son.propTypes = {
    num: PropTypes.number
}

class Father extends Component {
    render () {
        return (
            <div>
                <Son num = {1}/>
            </div>
        )
    }
}


export default Father 
