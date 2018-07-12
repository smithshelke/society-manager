import React from 'react'
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    </Provider>
    ,document.querySelector('.container')
);