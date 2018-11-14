import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import 'react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
