import React from 'react';

function Dashboard ({atBat, setAtBat}) {

    const strike = () => {
        if (atBat.strikes >= 3) {
            return setAtBat({strikes: 0, balls: 0})
        }
        return setAtBat({...atBat, strikes: atBat.strikes + 1})
    }

    const ball = () => {
        if (atBat.balls >= 4) {
            return setAtBat({strikes: 0, balls: 0})
        }
        return setAtBat({...atBat, balls: atBat.balls + 1})
    }

    const foul = () => {
        if (atBat.strikes < 2) {
            return setAtBat({...atBat, strikes: atBat.strikes + 1})
        }
        return
    }

    const hit = () => {
        return setAtBat({strikes: 0, balls: 0})
    }

    return (
        <div>
        <h2>Dashboard here!</h2>
        <button data-testid="strike" onClick={strike}>Add strike</button>
        <button data-testid="ball" onClick={ball}>Add ball</button>
        <button data-testid="foul" onClick={foul}>Add foul</button>
        <button data-testid="hit" onClick={hit}>Add hit</button>
        </div>
    )
}

export default Dashboard;