import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = details

  return (
    <li>
      <div className="curr-details">
          <img src={currencyLogo} alt={currencyName} className="image" />
          <p>{currencyName}</p>
      </div>

      <p>{usdValue}</p>
    
        <p>{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
