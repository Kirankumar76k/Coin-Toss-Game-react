// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, heads: 0, tails: 0, tossCoin: 'heads'}

  onBtnClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    const tossResult = Math.floor(Math.random() * 2)

    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossCoin: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossCoin: 'tails',
      }))
    }
  }

  render() {
    const {count, heads, tails, tossCoin} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img
            src={`https://assets.ccbp.in/frontend/react-js/${tossCoin}-img.png`}
            alt="toss result"
            className="toss-img"
          />
          <button className="button" type="button" onClick={this.onBtnClick}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result-name">total: {count}</p>
            <p className="result-name">Heads: {heads}</p>
            <p className="result-name">tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
