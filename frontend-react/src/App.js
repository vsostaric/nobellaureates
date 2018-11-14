import React, {Component} from 'react';
import './App.css';

import LaureateList from './laureate-list/LaureateList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <LaureateList/>
            </div>
        );
    }
}

export default App;
