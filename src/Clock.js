import React from 'react';

class Clock extends React.Component {
  // 'constructor' is part of 'class' and React components always called when an instance of our class is created aka 'construct'
  constructor(props) {
    // props aka properties
    super(props)
    // bad code!!: this.state.displayTime = ""
    // we must set state to an object
    this.state = {
      displayTime: ""
    }
    this.state = {
      visitorName: "Julie"
    }
  }

  // 'componentDidMount' is standard in React. This is where we load data or otherwise initialize data
  componentDidMount() {
    this.timerId = setInterval(() => {
      // call the 'tick'
      this.tick()
    }, 1000);
  }

  // custom method as seen on reactjs.org
  tick() {
    console.log("In tick")
    this.setState({
      displayTime: new Date().toLocaleTimeString()
    })
  }

  // 'render' is the standard for getting html into our web page
  render() {
    const displayTime = this.state.displayTime;
    const visitorName = this.state.visitorName;
    return (
      <div className="clock">
        <h2>Time is {displayTime} </h2>
        <div>Thanks for visiting, {visitorName}</div>
      </div>
    )
  }
}

export default Clock;