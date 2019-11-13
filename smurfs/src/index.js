//Dependencies
import React from "react";
import ReactDOM from "react-dom";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

//Components
import "./index.css";
import App from "./components/App";
import reducer from './components/reducers/reducer';

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk,logger)));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);