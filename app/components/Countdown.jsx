import React from 'react'
import Clock from './Clock.jsx'
import CountdownForm from './CountdownForm.jsx'

let Countdown = React.createClass({
    getInitialState: () => {
        return {count: 0}
    },
    handleSetCountdown: (seconds) => {
        this.setState({
            count: seconds
        });
    },
    render() {
        let {count} = this.state;
        
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
});

module.exports = Countdown;