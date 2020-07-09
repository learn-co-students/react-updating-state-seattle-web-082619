import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = () => {
    //   this.setState can be called using equals sign, =, or defining the object within parenthesis, ( )
    this.setState({
      hasBeenClicked: true
      currentTheme: 'blue' // state can be merged, although we did not define currentTheme in the constructor, states will be merged
      // but only thing on the first level will be merged, properties will be set to false
      addressInfo: {
          street: null,
          number: null,
          city: null,
          country: null
      }
      //be careful about updating one or some of the nested properties, the other properties will be overwritten if their values are not included

    });
  };
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default ClickityClick;
