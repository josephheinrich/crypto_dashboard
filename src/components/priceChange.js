import React from 'react';
import utils from '../math-utils';

const PriceChange = (props) => {

    var textColorOne = "black";
    var textColorThirty = "black";

    if (props.oneDay > 0 ) {
        textColorOne = "green";
    } else {
        textColorOne = "red";
    }

    if (props.thirtyDay > 0) {
        textColorThirty = "green";
    } else {
        textColorThirty = "red";
    }

    return (
        <>
            <li style={{ color: textColorOne }}>1 Day Price Change: {utils.roundNumber(props.oneDay, 2) || "0"}$</li>
            <li style={{color: textColorThirty}}>30 Day Price Change: {utils.roundNumber(props.thirtyDay, 2) || "0"}$</li>
        </>
    )
}

export default PriceChange;