import React, { Component } from 'react'
import Datasource from './Datasource'

//第一个参数接收一个组件，第二个参数会从DataSource或者是当前props属性中检索应用需要的数据
const higherOrderComponent = (UIComponent, handler) => {
    //返回一个新的组件
    return class extends Component {
        constructor () {
            super ()
            this.state = {
                //这里执行handler，handler内部会执行data的getcomments方法，就拿到了数据
                lists: handler()
            }
            this.handleChange = this.handleChange.bind(this)
        }
        //这里就是执行钩子就会接着执行这个方法，价格handleChange传递到Datasource的数组里面去
        componentDidMount () {
            Datasource.addChangeListener(this.handleChange)
        }
        componentWillUnmount() {
            Datasource.removeChangeListener(this.handleChange)
        }
        handleChange () {
            this.setState({ lists: handler() })
        }
        render() {
            //将lists作为props传入
            return <UIComponent {...this.state} />
        }
    }
}

export default higherOrderComponent