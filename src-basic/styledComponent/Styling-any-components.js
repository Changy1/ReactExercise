import React , { Component } from 'react'
import styled from 'styled-components'
import { Wrapper } from './commen'


//这里是给一个组件添加样式然后形成了新的组件StyleLink
const Link = props => {
    return (
        <a href = {props.to} {...props}>
            <span>{props.children}</span>
        </a>
    )
}

const StyleLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
`


class Example extends Component {
    render () {
        return (
            <Wrapper>
               <Link to='https://www.baidu.com'> 哈哈哈哈哈哈 </Link>
               <StyleLink to='https://www.baidu.com'> 哈哈哈哈哈哈 </StyleLink>
            </Wrapper>
        )    
    }
}

export default Example