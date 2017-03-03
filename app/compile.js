import React from 'react';
import ReactDom from 'react-dom';

var HelloMessage = React.createClass({
    displayName: 'HelloMessage',
    render: function() {
        return React.createElement('div',null,"Hello ", this.props.name);
    }
});
ReactDom.render(
    React.createElement(HelloMessage, {name: "John"}),
    document.getElementById('content')
);