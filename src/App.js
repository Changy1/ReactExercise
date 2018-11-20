import React, { Component } from 'react';
/* import Counter from './examples/counter' */
import Transition from './transition/Transition'

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* <Counter /> */}
        <Transition />
      </div>
    );
  }
}

export default App;
