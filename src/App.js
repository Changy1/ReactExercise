import React , { Component } from 'react';
/* import TodoList from './todolist/TodoList' */
/* import Calculator from './calculator/calculator' */
/* import Combination from './combination/combination' */
/* import ContextExample from './context/ContextExample' */
/* import PopFather from './pop-up/father' */
import {Brother , Sister } from './bus/Mybus'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <TodoList /> */}
      {/* <Calculator /> */}
      {/* <Combination /> */}
      {/* <ContextExample /> */}
      {/* <PopFather /> */}
      <Brother />
      <Sister />
      </div>
    );
  }
}

export default App;
