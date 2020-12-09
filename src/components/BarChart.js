import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ newCrypto }) => {

    const cryptosToCall = { newCrypto };

    const [state, setState] = useState({ Data: {} });

    useEffect(() => {
        axios.get("https://api.nomics.com/v1/currencies/ticker?key=a3d32784b7faaeefea98384862fa0cc2&ids=" + cryptosToCall.newCrypto + "&interval=1d,30d&per-page=100&page=1")
            .then(cryptoList => {
                console.log(cryptoList);
                const cryptoData = cryptoList.data;
                let cryptoname = [];
                let price = [];

                cryptoData.forEach(record => {
                    cryptoname.push(record.name);
                    price.push(record.price);
                });

                setState({
                    Data: {
                        labels: cryptoname,
                        datasets: [
                            {
                                label: 'Current Prices',
                                data: price,
                                backgroundColor: [
                                    "#3cb371",
                                    "#0000FF",
                                    "#9966FF",
                                    "#4C4CFF",
                                    "#00FFFF",
                                    "#f990a7",
                                    "#aad2ed",
                                    "#FF00FF",
                                    "Blue",
                                    "Red"
                                ]
                            }
                        ]
                    }
                });
            })
    }, [newCrypto])

    return (
        <div>
            <Bar
                data={state.Data}
                options={{ maintainAspectRatio: true }} />
        </div>
    )
}

export default BarChart;