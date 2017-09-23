import React from 'react';
import App from './App';
// import Header from '/.Header';

export default class Title extends React.Component {
    render() {
        return (
            <div>        
            <h1>the title is this...{this.props.title}</h1>
            </div>
        );
    }
}

// export default Title;