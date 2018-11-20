import React, { Component } from 'react'
import Datasource from './Datasource'
import higherOrderComponent from './HOC'

class BlogList extends Component {
    render () {
        return (
            <div>
                <h3>BlogtList</h3>
                <ol className = "list-group">
                    {
                        this.props.lists.map(item => <li key = {item.id} className="list-group-item">{item.title}</li>)
                    }
                </ol>
            </div>
        )
    }
}
//这里调用这个方法会直接返回一个组件，组件内部会渲染这个BlogList组件的视图
export default higherOrderComponent(BlogList, () => Datasource.getBlogPost())