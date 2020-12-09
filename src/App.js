import React, { useState, useEffect } from 'react';
import List from './components/List';
import axios from 'axios';
import './App.css';
import BarChart from './components/BarChart';


function App() {

    const [cryptos, setCryptos] = useState({});

    const [newCrypto, setNewCrypto] = useState("BTC, ETH, XRP");

    const apiURL = "https://cors-anywhere.herokuapp.com/https://api.nomics.com/v1/currencies/ticker?key=a3d32784b7faaeefea98384862fa0cc2&ids=" + newCrypto + "&interval=1d,30d&per-page=100&page=1";

    const getPosts = async () => {
        axios.get(apiURL, {
            headers: { "Access-Control-Allow-Origin": true},
            mode: 'cors'
        }).then((cryptos) => {
            console.log(cryptos.data);
            setCryptos({ cryptos: cryptos.data })
        })
    }

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <div className="App">
            <div className="container">
                <h1>Crypto Tracker</h1>

                <div className="cryptos">
                    <List cryptos={cryptos} />
                </div>

                <div className="addCryptos">
                    <p>
                        Add crypto:
                    </p>
                    <input type="input" onBlur={e => setNewCrypto(newCrypto + "," + e.target.value)}/>
                    <button type="button" onClick={getPosts}>Add +</button>
                </div>

                <div className="charts">
                    <BarChart newCrypto={newCrypto}/>
                </div>

                <footer>
                    <p>
                        Crypto Tracker V1
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default App;


