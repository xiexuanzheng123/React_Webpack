import React from 'react';
import ReactDom from 'react-dom';

var Timer = React.createClass({
    getInitialState: function() {
        return {secondsElapsed: 0};
    },
    tick: function() {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick,1000);
    },
    componentWillUnMount: function() {
        clearInterval(this.interval);
    },
    render: function() {
        return(
            <div>secondsElapsed: {this.state.secondsElapsed}</div>
        );
    }
});
ReactDom.render(
    <Timer />,
    document.getElementById('content')
);