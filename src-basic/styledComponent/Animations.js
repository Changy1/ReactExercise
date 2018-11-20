import React , { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { Wrapper } from './commen'

const rotate =  keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Input = styled.input.attrs({
    type: props => props.password ? 'password' : 'text'
})`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    animation: ${rotate} 2s linear infinite;
`

class Example extends Component {
    render () {
        return (
            <Wrapper>
                <Input password/>
            </Wrapper>
        )    
    }
}

export default Example