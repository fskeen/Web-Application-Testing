import React from 'react';

function Display ({atBat}) {
    return (
        <div>
        <h2>Display here!</h2>
        <p>Balls: {atBat.balls}</p>
        <p>Strikes: {atBat.strikes}</p>
        </div>
    )
}

export default Display;