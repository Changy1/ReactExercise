import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.css'
import uuid from 'uuid'

/* class Transition extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                <CSSTransition
                    // 这个状态控制动画的效果
                    in = {this.state.isShow}
                    // 这是一个延迟时间，在多长时间以后开始动画效果
                    timeout = {1000}
                    // 这是类名
                    classNames = 'message'
                    // 在组件'exited'之后会被卸载
                    unmountOnExit
                    // 组件刚刚被装载的时候就会有转换效果
                    appear = {true}
                >
                    {
                        (state) => (<h3 >Hello World  -- {state}</h3>)
                    }
                </CSSTransition>

                <p>
                    <button onClick = {() => this.setState({ isShow: !this.state.isShow })}>toggle</button>
                </p>
            </div>
        )
    }
} */

class Transition extends Component {
    state = {
        isShow: true,
        items: [
            {id: uuid(), text: 'Hello World'},
            {id: uuid(), text: 'Hello React'}
        ]
    }
    render() {
        return(
            <div>
                <TransitionGroup>
                    {
                        this.state.items.map(item => (
                            <CSSTransition
                                key = {item.id}
                                timeout = {1000}
                                classNames = 'message'
                                unmountOnExit
                            >
                                {
                                    (state) => (<h3>{item.text} -- {state}</h3>)
                                }
                            </CSSTransition>    
                        ))
                    }
                </TransitionGroup>
                <p>
                    <button onClick = {() => {
                        this.setState({
                            items: [...this.state.items, {
                                id: uuid(), text: 'new Hello'
                            }]
                        })
                    }}>add</button>
                </p>
            </div>
        )
    }
}

export default Transition