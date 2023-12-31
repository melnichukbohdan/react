import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import {Provider} from "react-redux";

const defaultState = {
    cash: 0,
}

const reducer = (state = defaultState, action: { type: string; payload: number; }) => {
    switch (action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

// Will get as 'state' in App component using the useSelector() hook.
const store = createStore(reducer)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
