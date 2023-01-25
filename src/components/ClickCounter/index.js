import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClicking = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="mainCon">
        <h1 className="mainH">
          The Button has been clicked <span className="Count">{count}</span>{' '}
          times
        </h1>
        <p className="mainP">Click the button to increase the count!</p>
        <button className="bton" onClick={this.onClicking} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
