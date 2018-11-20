import React , { Component } from 'react'
import styled from 'styled-components'
import { Wrapper } from './commen'

//可以第一种方法，给函数传一个props然后background判断有没有这个属性
/*  ${props => `background: ${props.primary ? 'red': 'white'}`} */
//也可以第二种写法background直接等于这个函数
const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    /* background: ${props => props.primary ? 'red': 'white'}
    color: ${props => props.outline ? 'red' : 'palevioletred'} */


    ${props => `background: ${props.primary ? 'red': 'white'}
                color: ${props.outline ? 'red' : 'white'}
    `}
`

class Example extends Component {
    render () {
        return (
            <Wrapper>
                <Button outline>outline</Button>
                <Button primary>primary</Button>
            </Wrapper>
        )    
    }
}

export default Example