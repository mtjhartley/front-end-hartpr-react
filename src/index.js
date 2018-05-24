import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import ReactTable from "react-table";
//import 'react-table/react-table.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
