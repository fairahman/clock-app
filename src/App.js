import React, {Component} from "react";

export default class Clock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
        }
  }
  componentDidMount() {
    this.timerID = setInterval(()=> this.setState({date: new Date()}), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  render = () => (
  <div>
    The time is {this.state.date.toLocaleTimeString()}
  </div>

    )
}
