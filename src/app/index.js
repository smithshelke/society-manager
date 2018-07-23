import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux';
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/font.css';

import reducers from '../reducers'; 

import App from '../components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);
console.log('heelo ');
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
    ,document.querySelector('.root')
);