// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {numberOfCharacters: 0}

  charactersCount = event =>
    this.setState({numberOfCharacters: event.target.value.length})

  render() {
    const {numberOfCharacters} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
          <div className="input-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="input-heading" htmlFor="input">
              Enter the phrase
            </label>
            <input
              type="text"
              id="input"
              placeholder="Enter the phrase"
              className="text-input"
              onChange={this.charactersCount}
            />
            <p className="letters-count">No.of letters: {numberOfCharacters}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
