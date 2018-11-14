
import React, { Component, Fragment } from 'react'

class TextSon extends Component {
    render () {
        return <span>嘿嘿嘿嘿</span>
    }
}

class Text extends Component {
    render () {
        return (
            <Fragment>
                <h1>哈哈哈哈</h1>
                <TextSon />
            </Fragment>
        )
    }
}

export default Text