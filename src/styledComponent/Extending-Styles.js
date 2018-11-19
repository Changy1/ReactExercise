import React , { Component } from 'react'
import styled from 'styled-components'
import { Wrapper } from './commen'

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};


    /* ${props => `background: ${props.primary ? 'red': 'white'}
                color: ${props.outline ? 'red' : 'white'}
     `} */
`
//这里相当于继承了Button的样式，但是会自己携带有部分样式，加以添加或者覆盖
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`

//as可以让这个标签当做任何标签来使用，如果是个组件，那么as就会渲染组件

const Reverse = props => {
    // 这里写...props可以将props在button上面展开，其中就有classname
    return <button {...props} > 
        {props.children.split('').reverse().join('')}
    </button>
}
class Example extends Component {
    render () {
        return (
            <Wrapper>
                <Button as = 'a'>outline</Button>
                <TomatoButton>primary</TomatoButton>
                <TomatoButton as = {Reverse}>今天是个好日子</TomatoButton>
            </Wrapper>
        )    
    }
}

export default Example