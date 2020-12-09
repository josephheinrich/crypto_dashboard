import React from 'react';
import utils from '../math-utils';
import PriceChange from './priceChange';

const List = (props) => {
    const { cryptos } = props.cryptos;

    if (!cryptos || cryptos.length === 0) return <p>No cryptos, sorry</p>;

    for (var i = 0; i < cryptos.length; i++) {
        if (!cryptos[i]["1d"]) {
            return <p>No 1d price change</p>
        }
    }

    return (
        <div className="row">
            {cryptos.map((crypto) => {
                return (
                    <div className="col-4 cryptoBox" key={crypto.id}>
                        <div className="cryptoContent">
                            <p>
                                {crypto.name} ({crypto.id})
                            </p>
                            <ul>
                                <li>Current Price: {utils.roundNumber(crypto.price, 2)}$</li>
                                <li>All Time High: {utils.roundNumber(crypto.high, 2)}$</li>
                                <PriceChange oneDay={crypto["1d"].price_change} thirtyDay={crypto["30d"].price_change}/>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default List;