import React, { Component } from 'react'
import Datasource from './Datasource'
import higherOrderComponent from './HOC'

class CommentList extends Component {
    render () {
        return (
            <div>
                <h2>CommentList</h2>
                <ul className = "list-group">
                    {
                        this.props.lists.map(item => <li key = {item.id} className="list-group-item">{item.title}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const Container = higherOrderComponent(CommentList, () => Datasource.getComments())

export default Container