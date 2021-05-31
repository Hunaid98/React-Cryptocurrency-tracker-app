import React from 'react'
import './coin.css';

const Coin = ({image,name,symbol,price,volume, priceChange, marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="logo" />
                    <h1>{name}</h1>
                    <div className="coin-symbol">{symbol}</div>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                </div>
                {priceChange < 0? (
                    <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                ): <p className="coin-percent green">{priceChange.toFixed(2)}%</p>}
                <p className="coin-marketcap">
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>
            </div>
            
        </div>
    )
}

export default Coin
