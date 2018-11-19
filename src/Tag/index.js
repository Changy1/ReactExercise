import React from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const OwnLinkItem = (props) => {
    // 在props里面取出tag属性，这是将要变成的元素
    let Tag = props.tag || 'a'
    // 拿到传递的class
    let _class = props.className || ''
    let _activeClassName = props.activeClassName || 'active'
    // 判断是否要加active
    // 这里还是会返回一个布尔值
    let isActive = props.exact ? props.location.pathname === props.to : props.location.pathname.startsWith(props.to)
    // 这里如果有nav就是NavLink 没有就是Link
    let className = (props.nav && isActive) ? _class + ' ' + _activeClassName : _class
    return <Tag className = {className} onClick = {() => {props.history.push(props.to)}}>{props.children}</Tag>
}

// 自己实现的Link组件，因为内部需要调用history的路由相关api，而Link组件又不是一个路由组件（会自动包Route，并能得到context中的路由相关属性）
// 所以想要使用这些api，需要利用withRouter的高阶组件来进行处理
export const OwnLink = props => {
    let Item = withRouter(OwnLinkItem)
    return (
        <Item {...props} />
    )
}

export const OwnNavLink = props => {
    //使用这个ownnavlink的时候先给上面的ownlinkitem包一个withrouter
    let Item = withRouter(OwnLinkItem)
    return (
        //然后这里渲染的时候会把自己写到ownnavlink上面的props传递到item上面，然后就能在ownlinkitem里面使用判断了
        <Item {...props} nav />
    )
}