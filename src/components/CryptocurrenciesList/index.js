import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyDetailsList} = props

  return (
    <div className="container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
        alt="cryptocurrency"
      />
      <div className="table">
        <div className="th">
          <p className="coin-type">Coin Type</p>
          <p>USD</p>
          <p>EURO</p>
        </div>
        <div>
          {currencyDetailsList.map(eachItem => (
            <CryptocurrencyItem details={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
