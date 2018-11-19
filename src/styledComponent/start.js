import React , { Component } from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`


class Example extends Component {
    render () {
        return (
            <Wrapper>
                <Title className = 'title'>Hello World</Title>
                <div>
                    哈哈哈
                </div>
            </Wrapper>
        )
    }
}

export default Example