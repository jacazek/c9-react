import React from 'react';
import ReactDOM from 'react-dom';

const MyApp = React.createClass({
    render() {
        return <div>my test content</div>;
    } 
});

ReactDOM.render(<MyApp />, document.getElementById('myapp'));
