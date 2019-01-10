import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import {rootSaga} from './container/saga';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const store  = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// const store  = createStore(reducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

