import React, { Component } from 'react';
import withSplitting from './withSplitting';
//import notify from './notify';
const SplitMe = withSplitting(()=> import('./SplitMe'));

class App extends Component {
  
  // handleClick = () => {
  //   import('./notify').then(({default: notify}) => {
  //     notify();
  //   })
  // }

  // state = {
  //   SplitMe: null
  // }

  // handleClick = () => {
  //   import('./SplitMe').then(({default : SplitMe})=> {
  //     this.setState({
  //       SplitMe
  //     })
  //   })
  // }

  state = {
    visible: false
  }

  handleClick = () => {
    this.setState({
      visible: true
    })
  }

 
  render() {
    // const {SplitMe} = this.state;
    const {visible} = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        {visible && <SplitMe/>}
      </div>
    );
  }
}

export default App;
