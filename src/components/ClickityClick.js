import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }
 
  // handleClick = () => {
  //   let newState = !this.state.hasBeenClicked
  //   this.setState({
  //     hasBeenClicked: newState
  //   })
  // };

  // handleClick = () => {
  //   this.setState(previousState => {
  //     return {hasBeenClicked: !previousState.hasBeenClicked}
  //   })
  // };

  handleClick = () => {
    this.setState(previousState => ({hasBeenClicked: !previousState.hasBeenClicked}))
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;
