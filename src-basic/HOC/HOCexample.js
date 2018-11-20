import React, { Component } from 'react'
import CommentList from './CommentList'
import BlogList from './BlogList'
import Datasource from './Datasource'

class HocExample extends Component {
    render () {
        return (
            <div>
                <button onClick = { Datasource.changeComments }>change</button>
                <CommentList />
                <BlogList />
            </div>
        )
    }
}

export default HocExample